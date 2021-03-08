import React from "react"
import { Collapse, List, ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import { Group } from "./App";
import styled from '@emotion/styled'
import { Privilige } from "./Privilige";

const Wrapper = styled.div`
    background: blue;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


interface Props {
    group: Group
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export const Item = ({ group }: Props) => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (<><Wrapper>
        <span>Group name: {group.name}</span>
        <span>Created: 16.02.2021</span>
        <span onClick={handleClick}>{open ? <ExpandLess /> : <ExpandMore />}</span>
    </Wrapper>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <p>PRIVILIGES</p>
                {group.programFunctions.map(privige => <Privilige privilige={privige} key={privige.id} />)}
                {/* {user.previlages.map((previlege, index) => (
                    <ListItem button key={index} className={classes.nested}>
                        <ListItemText primary={previlege} />
                    </ListItem>
                ))} */}
            </List>
        </Collapse></>)

}