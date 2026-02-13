<template>
    <div class="crear">
        <h1>Crear Vehiculo</h1>
        <h1>Token: {{ token }}</h1>
        <label for="">Marca</label>
        <input type="text" v-model="marca" />
        <label for="">Modelo</label>
        <input type="text" v-model="modelo" /> 
        <label for="">Chasis</label>
        <input type="text" v-model="chasis" />
        <label for="">Fecha de Fabricacion</label>
        <input type="date" v-model="fechaDeFabricacion" />
        <label for="">Fecha de Matriculacion</label>
        <input type="date" v-model="fechaDeMatriculacion" />
        <button @click="crearVehiculo()">Crear Vehiculo</button>
    </div>
</template>

<script>
import { crearVehiculo } from '@/client/VehiculoClient';
export default {
//emits o prorop con vehiculo crado para enviar a mostrar tabla vehiculos
    data() {
        return {
            marca: '',
            modelo: '',
            chasis: '',
            fechaDeFabricacion: '',
            fechaDeMatriculacion: '',
            token: localStorage.getItem('token'),
        }
    },
    emits: ['vehiculoCreado'],

    methods: {
        async crearVehiculo() {
            try {
                const response = await crearVehiculo(this.marca, this.modelo, this.chasis, this.fechaDeFabricacion, this.fechaDeMatriculacion);
                console.log('Vehículo creado:', response.data);
            } catch (error) {
                console.error('Error al crear el vehículo:', error);
            }
        }
    }

}
</script>

<style scoped>
.crear {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
}
</style>