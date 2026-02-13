<template>
    <div>
        <h1>Mostrar Tabla Vehiculos</h1>
        <table>
            <thead>
                <tr>
                    <th>Marca</th>
                    <th>Modelo</th>
                    <th>Chasis</th>
                    <th>Fecha de Fabricacion</th>
                    <th>Fecha de Matriculacion</th>
                </tr>
            </thead>
            <tbody v-for="vehiculo in vehiculos" :key="vehiculo.id">
                <tr>
                    <td>{{ vehiculo.marca }}</td>
                    <td>{{ vehiculo.modelo }}</td>
                    <td>{{ vehiculo.chasis }}</td>
                    <td>{{ vehiculo.fechaDeFabricacion }}</td>
                    <td>{{ vehiculo.fechaDeMatriculacion }}</td>
                </tr>
            </tbody>
        </table>


    </div>
  
</template>

<script>
export default {
    data() {
        return {
            vehiculos: [],
        }
    },

}
</script>

<style>

</style>