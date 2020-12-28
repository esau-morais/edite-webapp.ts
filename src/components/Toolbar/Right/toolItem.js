// i18n
import { useTranslation } from 'react-i18next';
// Components (styles)
import { ItemContent } from '../toolbar.styles';
// Components (children)
import ToolTip from '../../Tooltip';

// Each item will have an icon, a name, and shortcut
// It will be envolved by a tooltip
function ToolItem({ upcoming, active, onActive, name, children }) {
  const { t } = useTranslation();

  return (
    <ItemContent
      className={upcoming ? "upcoming" : ""}
      onClick={onActive}
    >
      <div className={active ? "activeItem" : ""} />

      <ToolTip direction={"left"} name={upcoming ? t('Upcoming') : name}>
        {children}
      </ToolTip>
    </ItemContent>
  )
}

export default ToolItem;
