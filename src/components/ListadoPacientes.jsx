import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Paciente } from './Paciente'

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  useEffect(() => {
    
  }, [pacientes])


  return (
    <Box sx={{
      width: { md: "90%", lg: "50%" },
      marginRight: { xs: 0, md: 10 },
      overflowY: "scroll",
      height: "77vh",
      marginTop: { xs: 10, sm: 10, md: 0 }
    }}

    >
      <Typography variant='h2' fontWeight={"Bold"} fontSize={35} textAlign={"center"}>Listado de pacientes</Typography>
      <Typography component="p" mt={2} mb={5} fontStyle="inherit" textAlign="center">Administra tus {" "}
        <span style={{ color: 'indigo', fontWeight: "bold" }}>pacientes y citas</span>
      </Typography>

      {
        pacientes.map(paciente => (
          <Paciente
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={ eliminarPaciente }

          />
        ))
      }




    </Box>
  )
}

export default ListadoPacientes
