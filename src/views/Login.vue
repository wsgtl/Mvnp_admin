<template>
    <div>
        Login
        <button @click="handleLogin">登陆</button>
    </div>
</template>
<script setup>
const handleLogin = ()=>{
    localStorage.setItem("token","尼玛")
}
</script>
