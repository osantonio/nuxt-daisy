<template>
<!-- formulario de contacto -->
<div class="flex flex-col items-center mt-20 h-screen">
    <div class="w-full max-w-lg h-screen">
        <div class="rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <h1 class="text-center text-2xl font-bold mb-2">Contacto</h1>
                <p class="text-center text-gray-600 text-sm">
                    Si tienes alguna duda o sugerencia, puedes contactarnos a través de este formulario.
                </p>
            </div>
            <form class="flex flex-col" @submit.prevent="submit">
                <div class="flex flex-col">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Nombre
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Nombre"
                        v-model="name"
                    />
                </div>
                <div class="flex flex-col">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Correo electrónico
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Correo electrónico"
                        v-model="email"
                    />
                </div>
                <div class="flex flex-col">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                        Mensaje
                    </label>
                    <textarea
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="message"
                        rows="4"
                        placeholder="Mensaje"
                        v-model="message">
                        </textarea>
                </div>
                <div class="flex flex-col">
                    <button
                        class="shadow bg-primary hover:bg-primary-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        @click="submit">
                        Enviar
                    </button>
                </div>
                </form>
                </div>
                </div>
                </div>

</template>
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            message: '',
        }
    },
    methods: {
        submit() {
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }
            this.$emit('submit', data)
        }
    }
}

</script>
