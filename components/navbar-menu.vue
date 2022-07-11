<template>
      <div class="navbar-center hidden lg:flex">
            <!-- option select rol actual -->
            <div class="w-full lg:w-auto">
                <select class="w-full bg-base-100 lg:w-auto" v-model="rolActual">
                    <option v-for="rol in permisos['programa']" :value="rol">{{rol}}</option>
                </select>
            </div>

            <!-- rol actual -->


                <a class="mx-4 font-inter  text-sm" v-if="permisos['Cargar Datos'].includes(rolActual)" href="/cargarDatos">Cargar Datos</a>

                <a class="mx-4 font-inter  text-sm" v-if="permisos['universidad'].includes(rolActual)" href="/universidad">Universidad</a>

                <a class="mx-4 font-inter  text-sm" v-if="permisos['facultad'].includes(rolActual)" href="/facultad">Facultad</a>

                <a class="mx-4 font-inter  text-sm" v-if="permisos['programa'].includes(rolActual)" href="/programa">Programa</a>
      </div>

</template>
<script> 
export default {
    data: () => {
        return {
            rolActual: 'rectoria',
            permisos: {
                  'Cargar Datos': ['rectoria', 'vicerrectoria'],
                  'universidad': ['rectoria', 'bienestar', 'vicerrectoria', 'decano'],
                  'facultad': ['rectoria', 'bienestar', 'vicerrectoria', 'decano', 'coordinadorFacultad', 'jefeDepartamento'],
                  'programa': ['rectoria', 'bienestar', 'vicerrectoria', 'decano', 'coordinadorPrograma', 'coordinadorFacultad', 'jefeDepartamento', 'profesor', 'coordinadorSemestre'],
            }
        }
    }
}
</script>