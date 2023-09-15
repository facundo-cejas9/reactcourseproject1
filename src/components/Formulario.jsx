
import { Box, Stack, Button, FormControl, Grid, TextField, Typography } from '@mui/material'
import { useForm } from '../hooks'
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';






export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {



  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [diagnostico, setDiagnostico] = useState('')



  const today = new Date().toISOString().split('T')[0]; // Obtiene la fecha actual en formato YYYY-MM-DD

  const onResetForm = () => {
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setDiagnostico("")
  }




  useEffect(() => {

    if (Object.keys(paciente).length > 0) {
      console.log(paciente.nombre)
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setDiagnostico(paciente.diagnostico)
    }

  }, [paciente])




  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)
    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();



    // Objeto de Paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      diagnostico
  }

  if(paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

      setPacientes(pacientesActualizados)
      setPaciente({})

  } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
  }

    onResetForm();

     const onDelete = () => {
    objetoPaciente.id.delete()
  }


  }

 
  const alert = () => {

    
    paciente.id
      ?
      Swal.fire(
        'Listo!',
        'Formulario editado correctamente!',
        'success'
      )
      :
      Swal.fire(
        'Listo!',
        'Formulario guardado correctamente!',
        'success'
      )

    
  }



  return (
    <Box sx={{
      width: {xs:"100%", md: "50%", lg: "30%" },
      marginLeft: { xs: 0, md: 20 },
      marginRight: { xs: 0, sm: 5 }
    }}>
      <Typography variant='h2' fontWeight={"Bold"} fontSize={35} textAlign={"center"}>Seguimiento pacientes</Typography>
      <Typography component="p" mt={2} mb={5} fontStyle="inherit" textAlign="center">Añadir Pacientes y {" "}
        <span style={{ color: 'indigo', fontWeight: "bold" }}>Administralos</span>
      </Typography>

      <FormControl sx={{
        backgroundColor: "white",
        padding: 5,
        borderRadius: 2,
        boxShadow: 5,
        display: "block"
      }}
      >



        <Stack onSubmit={handleSubmit} component={"form"} spacing={3}>
          <Grid >
            <TextField
              label="Nombre Mascota"
              type='text'
              fullWidth
              value={nombre}
              variant='outlined'
              onChange={(e) => setNombre(e.target.value)}

            />
          </Grid>

          <Grid >
            <TextField
              label="Nombre del dueño"
              type='text'
              fullWidth
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
              variant='outlined'

            />
          </Grid>

          <Grid >
            <TextField
              label="Email"
              type='email'
              fullWidth
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              variant='outlined'

            />
          </Grid>

          <Grid >

            <TextField
              label="Selecciona una fecha"
              type="date"
              name='fecha'
              value={fecha}
              fullWidth
              onChange={(e) => setFecha(e.target.value)}
              inputProps={{
                min: today, // Establece la fecha mínima como hoy
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>



          <Grid >

            <TextField
              type='text'
              label="Diagnóstico del animal"
              multiline
              fullWidth
              value={diagnostico}
              name="diagnostico"
              onChange={(e) => setDiagnostico(e.target.value)}
              variant='outlined'

            />
          </Grid>



          <Grid display={'flex'} gap={2}>
            <Button
              fullWidth
              type='submit'
              variant='contained'
              onClick={alert}
              disabled={nombre.length && email.length && diagnostico.length && propietario.length > 5 ? false : true} sx={{ padding: 1 }}>
              {paciente.id ? "Editar" : "Agregar Paciente"}
            </Button>
          </Grid>


        </Stack>

      </FormControl>

    </Box>
  )
}

export default Formulario;