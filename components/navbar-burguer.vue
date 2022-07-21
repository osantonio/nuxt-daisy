<template>
    <div class="dropdown">
      <button tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </button>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-56">
          
          <ul class="p-2">

                          <div class="w-full lg:w-auto">
                <select class="w-full bg-base-100 lg:w-auto" v-model="rolActual">
                    <option v-for="rol in permisos['programa']" :value="rol">{{rol}}</option>
                </select>
            </div>


              <li><a class="mx-4 font-inter  text-sm" v-if="permisos['Cargar Datos'].includes(rolActual)" href="/cargarDatos">Cargar Datos</a></li>
              <li><a class="mx-4 font-inter  text-sm" v-if="permisos['universidad'].includes(rolActual)" href="/universidad">Universidad</a></li>
              <li><a class="mx-4 font-inter  text-sm" v-if="permisos['facultad'].includes(rolActual)" href="/facultad">Facultad</a></li>
              <li><a class="mx-4 font-inter  text-sm" v-if="permisos['programa'].includes(rolActual)" href="/programa">Programa</a></li>
          </ul>
      </ul>
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