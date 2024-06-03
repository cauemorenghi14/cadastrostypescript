import { Icon, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface IListItemLinkProps {
  to: string
  icon: string
  label: string
  onClick: () => void
}

export const ListItemLink = ({icon, label, onClick, to}: IListItemLinkProps) => {

  const navigate = useNavigate()

  const handleClick = () => {
    onClick()
    navigate(to)
  }

  return (
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}