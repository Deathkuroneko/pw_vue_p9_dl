<template>
    <div class="token">
        <!--login-->
        <h1>Token</h1>

        <label for="">Usuario</label>
        <p>{{ inforUser.username }}</p>

        <label for="">Rol</label>
        <p>{{ inforUser.role }}</p>

        <label for="">Password</label>
        <p>{{ inforUser.password }}</p>

        <label for=""> Token</label>
        <h2>{{ token }}</h2>
        <button @click="obtenerInfoUsuario()">Generar Token</button>
    </div>

</template>

<script>
import { login, obtenerInfoUsuario } from '@/client/VehiculoClient.js'
export default {
    data() {
        return {
            token: localStorage.getItem('token'),
            inforUser: [],
        }
    },
    methods: {
        async obtenerInfoUsuario() {
            try {
                const response = await obtenerInfoUsuario();
                this.inforUser = response.data;
            } catch (error) {
                console.error('Error al obtener la información del usuario:', error);
            }
        },
        async login() {
            try {
                const response = await login('lema', '3110');
                this.token = response.data;
            } catch (error) {
                console.error('Error al iniciar sesión:', error);
            }
        }
    }
}
</script>

<style scoped>
.token {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
}
</style>