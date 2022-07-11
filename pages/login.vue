<template>
<!-- login -->
<div class="flex flex-col items-center justify-center h-screen">
    <div class="w-full max-w-xs">
        <div class="bg-white shadow-md rounded px-12 pt-10 pb-10 mb-6">
            <logo />
            <div class="flex flex-col items-center">
                <div class="-mb-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
                </div>
                <div class="-mb-3">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Iniciar sesión
                    </button>
                    <br>
                    <a class="inline-block align-baseline font-bold text-sm text-gray-500 hover:text-gray-800" href="#">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
</script>
