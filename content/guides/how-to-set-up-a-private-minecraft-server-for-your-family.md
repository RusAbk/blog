---
title: How to Set Up a Private Minecraft Server for Your Family
description: A practical setup guide for running a private Paper Minecraft server on Ubuntu.
published: 2026-05-18
tags:
  - guide
  - minecraft
  - self-hosted
  - linux
  - server
---

My daughter and I love playing Minecraft together. At some point I decided to set up our own server: custom difficulty, mob griefing off, teleport plugins, saved waypoints. Turns out it is easier than it used to be.

This is everything I figured out, written down before the agents take over and nobody does this by hand anymore.

## 01. Hardware: Pick Your VPS

You can run this on an old laptop sitting in a closet, but I went with a VPS, a rented slice of a real server in a data center, accessible over the internet 24/7.

>[!note] What is a VPS?
>A VPS is a virtual machine you rent from a hosting provider. You get a fixed amount of CPU, RAM, and storage, full SSH access, and a public IP address. You pay monthly, usually $3-10 for small instances, and it runs whether your home computer is on or not.

For a small family server with 2-3 players and a handful of plugins, you do not need much:

```txt
CPU    2 vCores    # enough for chunk loading without lag
RAM    4 GB        # 1G for the OS, 3G for the server
Disk   20 GB SSD   # world data grows slowly
Cost   $3-10/mo    # search "cheap VPS" in your country
```

Any major provider works: Hetzner, DigitalOcean, Linode, Vultr, and dozens of local options depending on your region. But for a family Minecraft server, I would start with a local provider that has servers physically located in your country. You usually avoid inflated international pricing, and more importantly, you get lower ping. The closer the server is to you physically, the better the game will feel.

## 02. Operating System

Pick **Ubuntu 24.04 LTS** when your provider asks for an OS. LTS means Long Term Support: stable updates, no surprises, supported until 2029.

Why Ubuntu and not Windows?

```txt
# Ubuntu Server (no GUI)
RAM overhead: ~200 MB
License cost: free
SSH management: native, fast

# Windows Server
RAM overhead: ~1.5-2 GB
License cost: often extra
Remote management: RDP (slower, heavier)
```

For a Minecraft server, paying extra for Windows to waste 2 GB of RAM on a GUI you will never look at makes no sense. Ubuntu 22.04 also works fine if your provider does not have 24.04 yet.

## 03. Install Java

Connect to your server via SSH. You will find the IP address, username, and password or SSH key in your provider's control panel or welcome email.

```bash
ssh root@YOUR_SERVER_IP
```

First, update the system:

```bash
sudo apt update
sudo apt upgrade -y
```

Ubuntu's built-in repositories have older Java versions. Fresh Minecraft and Paper server versions require Java 25, so we will install it from the Adoptium repository.

```bash
# Install required utilities
sudo apt install -y wget apt-transport-https gpg

# Add the GPG key
wget -qO - https://packages.adoptium.net/artifactory/api/gpg/key/public \
  | gpg --dearmor \
  | sudo tee /etc/apt/keyrings/adoptium.gpg > /dev/null

# Add the repository
echo "deb [signed-by=/etc/apt/keyrings/adoptium.gpg] \
  https://packages.adoptium.net/artifactory/deb \
  $(. /etc/os-release && echo "$VERSION_CODENAME") main" \
  | sudo tee /etc/apt/sources.list.d/adoptium.list

sudo apt update
```

Install Java 25:

```bash
sudo apt install -y temurin-25-jdk

# Verify
java -version
```

You should see something like `openjdk version "25..."`. If you do, you are good.

## 04. Choose Your Server Software

There are a few options. Here is the short version:

| Software | What it is | Best for |
| --- | --- | --- |
| Vanilla | Official Mojang server, no extras | Zero plugins, purist experience |
| Paper | Optimized fork of Spigot with plugin support | Most cases: fast, stable, supports plugins |
| Forge | Mod loader, older modpacks | Heavy mods: Create, Technic, and similar |
| Fabric | Lighter modern mod loader | Newer mods, performance-focused modpacks |

I am going with **Paper**. I used to run Spigot servers years ago. Paper is its successor, faster and better maintained. It handles chunk loading better on limited hardware, and it supports all the quality-of-life plugins we want: teleport, homes, warps. No need for heavy mods.

## 05. Create a Dedicated Minecraft User

Do not run the server as root. Create a separate user with no login shell, which is standard security practice.

```bash
# Create the user
sudo adduser --disabled-password --gecos "" minecraft

# Create the server directory
sudo mkdir -p /opt/minecraft/server
sudo chown -R minecraft:minecraft /opt/minecraft

# Switch to the minecraft user
sudo su - minecraft

# Go to the server folder
cd /opt/minecraft/server
```

## 06. Download Paper

Go to **papermc.io/downloads/paper**, pick your Minecraft version, and copy the download link for the latest build. Then on the server:

```bash
wget -O paper.jar "YOUR_PAPER_DOWNLOAD_URL"

# Verify the file downloaded
ls -lh
# Should show: paper.jar
```

For example, this is the link I used:

```bash
wget -O paper.jar "https://fill-data.papermc.io/v1/objects/830d4eb5c15cbd802a9ec9f2f54eaaaeb9511958339aec983fd0c88bad21d940/paper-26.1.2-64.jar"
```

## 07. First Launch and Accept EULA

Run the server once. It will start, generate some files, then stop and ask you to accept the End User License Agreement.

```bash
java -Xms1G -Xmx3G -jar paper.jar nogui
```

It will stop with a message about EULA. Open the file:

```bash
nano eula.txt

# Change this line:
eula=false

# To this:
eula=true

# Save: Ctrl+O, Enter, Ctrl+X
```

## 08. Configure server.properties

Open the file:

```bash
nano server.properties
```

Here is what I set for our family server:

```properties
max-players=5
server-port=25565
online-mode=true
white-list=false
view-distance=8
simulation-distance=6
difficulty=normal
spawn-protection=0
motd=Family Server - No Griefers Allowed
```

Useful notes:

```txt
online-mode=true          # keep true if everyone has a paid Minecraft account
view-distance=8           # lower = less RAM/CPU
simulation-distance=6
difficulty=normal         # I use "easy"; my daughter dislikes aggressive mobs
```

>[!note] online-mode and MOTD
>Keep `online-mode` set to `true` if everyone has a paid Minecraft account. This verifies player identity with Mojang's servers. Set it to `false` only for cracked or offline clients.
>
>`motd` is the description shown in the server list. Put whatever you want there.

Save with `Ctrl+O`, `Enter`, then `Ctrl+X`.

## 09. Set Game Rules

If you want players to keep their inventory after death, you can enable that setting. First, temporarily start the server:

```bash
java -Xms1G -Xmx3G -jar paper.jar nogui
```

When the server finishes loading, type this into the console:

```mcfunction
gamerule keepInventory true
```

You can also set:

```mcfunction
gamerule doFireTick false
```

This disables fire spread, which is useful if you want a calmer family server.

If you get an error, try the newer versions of these settings. On later game versions, starting around Minecraft 1.21.11+, the namespaced rules may be required:

```mcfunction
gamerule minecraft:keep_inventory true
gamerule minecraft:fire_spread_radius_around_player 0
```

Another useful rule for a small server:

```mcfunction
gamerule minecraft:players_sleeping_percentage 50
```

This lets the server skip the night if at least half of the players are sleeping.

You can also disable block destruction from creepers while keeping the explosion itself and damage to players:

```mcfunction
gamerule mobGriefing false
```

Or, in newer versions:

```mcfunction
gamerule minecraft:mob_griefing false
```

>[!warning] Important downside of mob_griefing false
>`mobGriefing false` does not only affect creeper damage. It changes several mob interactions with the world:
>
>- creepers do not break blocks
>- endermen do not carry blocks
>- mobs may interact with the world differently
>- villagers and other mobs may have some behavior limitations
>
>For a small family server this is usually fine.

Then stop the server:

```mcfunction
stop
```

## 10. Install EssentialsX

EssentialsX adds the quality-of-life commands that make a private server actually comfortable: homes, warps, teleport requests, and more.

After the first run, a `plugins` folder will have appeared. Go there:

```bash
cd /opt/minecraft/server/plugins

# Get the latest download link from essentialsx.net/downloads
wget -O EssentialsX.jar "YOUR_ESSENTIALSX_URL"

# Go back to server root
cd /opt/minecraft/server
```

EssentialsX will auto-configure itself on next startup. No manual setup needed for basic use.

Commands you will use constantly:

| Command | What it does |
| --- | --- |
| `/sethome` | Save your current location |
| `/home` | Teleport to your saved home |
| `/tpa playername` | Request to teleport to a player |
| `/setwarp name` | Save a named location as admin |
| `/warp name` | Teleport to a named location |
| `/back` | Return to where you were before teleporting |

## 11. Start the Server and Make Yourself Admin

Start:

```bash
java -Xms1G -Xmx3G -jar paper.jar nogui
```

Once running, grant yourself operator/admin permissions from the server console:

```mcfunction
op YourMinecraftUsername
```

Now you can run admin commands in-game. Stop the server again:

```mcfunction
stop
```

## 12. Set Up Autostart with systemd

We want the server to start automatically when the VPS boots, and restart itself if it crashes. systemd handles this.

Exit the minecraft user first:

```bash
exit
```

Create the service file:

```bash
sudo nano /etc/systemd/system/minecraft.service
```

Paste this content:

```ini
[Unit]
Description=Minecraft Paper Server
After=network.target

[Service]
User=minecraft
Group=minecraft
WorkingDirectory=/opt/minecraft/server
ExecStart=/usr/bin/java -Xms1G -Xmx3G -jar /opt/minecraft/server/paper.jar nogui
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
```

Save with `Ctrl+O`, `Enter`, then `Ctrl+X`.

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable minecraft
sudo systemctl start minecraft
```

Useful systemd commands:

```bash
# Check status
sudo systemctl status minecraft

# Watch live logs
sudo journalctl -u minecraft -f
# Exit logs: Ctrl+C

# Stop / Start / Restart
sudo systemctl stop minecraft
sudo systemctl start minecraft
sudo systemctl restart minecraft
```

## 13. Open Port 25565

Configure the UFW firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 25565/tcp
sudo ufw enable

# Verify
sudo ufw status
```

Expected output:

```txt
22/tcp     ALLOW
25565/tcp  ALLOW
```

## 14. Connect to Your Server

In Minecraft Java Edition:

```txt
Multiplayer -> Add Server
Server Address: YOUR_SERVER_IP:25565

# If using the default port (25565), you can also just type:
YOUR_SERVER_IP
```

That is it. You are in.

## 15. Admin Commands Reference

For the console or in-game, with op permissions:

### Player Management

```txt
/op Nickname
/deop Nickname
/whitelist add Nickname
/ban Nickname
/pardon Nickname
/gamemode creative Nick
/gamemode survival Nick
/time set day
/weather clear
/save-all
```

### EssentialsX

```txt
/sethome
/home
/delhome
/spawn
/setspawn
/tpa Nickname
/tpaccept
/setwarp name
/warp name
/delwarp name
/back
```

---

Written by hand, for the record. By the time this is useful to someone, the agents will probably do all of this automatically. But there is something to be said for doing it yourself.
