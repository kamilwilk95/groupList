import { Group } from "./App";
import { Item } from "./Item";

interface Props {
    groups: Group[]
}

export const SettingsGroups = (props: Props) => {
    console.log(props)
    return (
        <div>
            {
                props.groups.map(group => <Item key={group.id} group={group} />)
            }
        </div>
    )
}