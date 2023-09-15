import { Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Swal from 'sweetalert2'

export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, diagnostico, id } = paciente

    const handleDelete = () => {
        Swal.fire({
            title: 'Eliminar paciente?',
            text: "Estas seguro que desea elimnar el paciente?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id)
                Swal.fire(
                    'Borrado!',
                    'Paciente eliminado correctamente.',
                    'success'
                )
            }
        })
    }


    return (
        <Stack sx={{
            backgroundColor: 'white',
            margin: { xs: 2, sm: 5, md: 5 },
            boxShadow: 5,
            padding: 5,
            borderRadius: 3
        }}>
            <Typography component='p' fontWeight='Bold' textTransform="uppercase" mb={2}>Nombre: {" "}
                <Typography component={"span"} textTransform='none'>{nombre}</Typography>
            </Typography>

            <Typography component='p' fontWeight='Bold' textTransform="uppercase" mb={2}>Propietario: {" "}
                <Typography component={"span"} textTransform='none'> {propietario} </Typography>
            </Typography>

            <Typography component='p' fontWeight='Bold' textTransform="uppercase" mb={2}>Email: {" "}
                <Typography component={"span"} textTransform='none'>{email}</Typography>
            </Typography>

            <Typography component='p' fontWeight='Bold' textTransform="uppercase" mb={2}>Fecha de alta: {" "}
                <Typography component={"span"} textTransform='none'>{fecha}</Typography>
            </Typography>

            <Typography component='p' fontWeight='Bold' textTransform="uppercase">Síntomas: {" "}
                <Typography component={"span"} textTransform='none'>{diagnostico}</Typography>
            </Typography>

            <Grid display='flex' gap={3} marginTop={8}>
                <Button size='medium' variant='contained' onClick={() => setPaciente(paciente)} >Editar</Button>
                <Button size='medium' onClick={handleDelete} variant='contained' sx={{ backgroundColor: "red", ":hover": { backgroundColor: "black" } }} >Eliminar</Button>
            </Grid>
        </Stack>


    )
}
