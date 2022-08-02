import React from "react";
import { MachinePageContainer } from "./machine.styles";
import Machine from "../../components/machine/machine.component";
import MachineOperation from "../../components/machine-operation/machine-operation.component";
import MachinePhotoGallery from "../../components/machine-photo-gallery/machine-photo-gallery.component";

const MachinePage = () => (
    <MachinePageContainer>
      <Machine />
      <MachinePhotoGallery />
      <MachineOperation />
    </MachinePageContainer>
);

export default MachinePage;