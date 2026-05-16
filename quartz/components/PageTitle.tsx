import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="site-brand">
        <span class="site-name">{title}</span>
        <span class="site-kicker">Notes</span>
        <img src={`${baseDir}/static/profile-image.jpg`} alt="Ruslan Abkadirov" width="96" height="96" />
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.site-brand {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.55rem;
}

.site-name {
  line-height: 1.08;
}

.site-kicker {
  width: fit-content;
  padding: 0.14rem 0.48rem;
  border: 1px solid var(--lightgray);
  border-radius: 999px;
  color: var(--secondary);
  font-size: 0.72rem;
  font-family: var(--bodyFont);
  font-weight: 600;
}

.site-brand img {
  margin-top: 0.25rem;
  width: 5.75rem;
  height: 5.75rem;
  object-fit: cover;
  border-radius: 18px;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
