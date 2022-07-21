<template>
    <div>
        <div class="p-12">
            <login-google />
            
            <div class=" w-80 p-6 border-gray-600">
                <p class="flex items-center justify-center"> o </p>
            </div>

            <!-- // usuario --> 
            <input class="h-12 w-80 rounded font-inter placeholder:p-3" type="text" v-model="usuario" placeholder="Usuario">
            <br> <br>
            <input class="h-12 w-80 rounded font-inter placeholder:p-3" type="password" v-model="contraseña" placeholder="Contraseña">
            <br> <br>
            <button class="h-12 w-80 rounded font-inter bg-primary text-gray-200" @click="login">Iniciar Sesión</button>
            <br>
            <a href="#">Olvidé mi contraseña</a>
        </div>
    </div>
</template>

<script>

</script>
