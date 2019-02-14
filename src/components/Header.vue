<template>
    <nav class="navbar navbar-expand-sm navbar-light bg-light my-3 text-small">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        <button class="navbar-toggler" type="button" @click="toggleNavbar" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse"  id="collapsibleNavbar" :class="{'show': navbarOpen}">
            <ul class="navbar-nav">
                <router-link to="/portfolio" active-class="active" tag="li" class="nav-item">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link to="/stocks" active-class="active" tag="li" class="nav-item">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
        </div>

        <div class="collapse navbar-collapse"  id="collapsibleNavbar" :class="{'show': navbarOpen}">
            <ul class="navbar-nav ml-auto">
                <router-link to="/" tag="li" class="nav-item">
                    <a class="nav-link">End Day</a>
                </router-link>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" role="button" id="navbarDropdown" @click="toggleDropdown()">
                        Save & Load
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown" :class="{'show': dropdownOpen}">
                        <a class="dropdown-item">Save Data</a>
                        <a class="dropdown-item">Load Data</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data: function(){
        return {
            navbarOpen: false,
            dropdownOpen: false
        }
    },
    methods: {
        toggleNavbar(){
            // console.log(this.navbarOpen);
            this.navbarOpen = !this.navbarOpen;
        },
        toggleDropdown(){
            // console.log(this.dropdownOpen);
            this.dropdownOpen = !this.dropdownOpen;
        }
    }
}
</script>

<style scoped>
.text-small{
    font-size: 0.9rem;
}
.active{
    background-color: lightgray;
}
</style>
