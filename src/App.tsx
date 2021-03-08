import { List, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import { Item } from './Item';
import { SettingsGroups } from './SettingsGroup';


const response = '{"groups":[{"id":1,"name":"SUPERUSER","description":"TEST","programFunctions":[{"id":1,"name":"Add new user"}]}]}';

export interface Group {
  id: number;
  name: string;
  description: string;
  createdAt: number;
  programFunctions: ProgramFunctions[]

}

export interface ProgramFunctions {
  id: number;
  name: string;
}

interface DTO {
  groups: Group[]
}

//SetingsWindow
const App = () => {

  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const parsed: DTO = JSON.parse(response);
    setGroups(parsed.groups);
  }, []);


  return (
    <SettingsGroups groups={groups} />
  );
}

export default App;
