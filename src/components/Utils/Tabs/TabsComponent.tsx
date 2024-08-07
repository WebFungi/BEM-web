import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import MushroomProps from "../../../Interfaces/mushroom";

const orange = {
  50: "#FFF3E0",
  200: "#FFCC80",
  300: "#FFB74D",
  400: "#FFA726",
  100: "#FFE0B2",
  900: "#E65100",
  350: "#e3ae97",
};

const grey = {
  200: "#DAE2ED",
  300: "#C7D0DD",
  700: "#434D5B",
  100: "#F3F6F9",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #000;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${orange[100]};
  }

  &:focus {
    color: #000;
  }

  &.${tabClasses.selected} {
    background-color: ${orange[350]};
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 97%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: #fff;
  border: 1px solid ${grey[300]};
  border-radius: 12px;
  opacity: 0.9;
`;

const TabsList = styled(BaseTabsList)`
  min-width: 400px;
  border-radius: 12px;
  border: 1px solid ${orange[300]};
  margin-bottom: 16px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;

interface TabsComponentProps {
  mushroom: MushroomProps;
}

export default function TabsComponent(props: TabsComponentProps) {
  return (
    <Tabs defaultValue={0}>
      <TabsList>
        <Tab value={0}>Sobre</Tab>
        <Tab value={1}>Taxonomia</Tab>
      </TabsList>
      <TabPanel value={0}>
        {props.mushroom.description || 'Em breve traremos uma descrição sobre este cogumelo.'}
        {/* <br />
        <br />
        Investigações na América do Norte mostraram que existem várias espécies
        semelhantes dentro do que foi considerado L. sulphureus, e que o
        verdadeiro L. sulphureus pode estar restrito a regiões a leste das
        Montanhas Rochosas. As análises filogenéticas de sequências de ITS,
        subunidades nucleares grandes e subunidades pequenas mitocondriais de
        rDNA de coleções norte-americanas delinearam cinco clados distintos no
        clado central de Laetiporus. */}
      </TabPanel>
      <TabPanel value={1}>
        <div>
          <p>➔ Reino: {props.mushroom.kingdom}</p>
          <p>➔ Filo: {props.mushroom.phylum}</p>
          <p>➔ Classe: {props.mushroom.class}</p>
          <p>➔ Ordem: {props.mushroom.order}</p>
          <p>➔ Família: {props.mushroom.family}</p>
          <p>➔ Gênero: {props.mushroom.genus}</p>
          <p>
            ➔Espécie: <i>{props.mushroom.specie}</i>
          </p>
        </div>
      </TabPanel>
    </Tabs>
  );
}
