<script setup>
    import { computed } from 'vue'

    const copyright = computed(() =>{
        const currentYear = new Date().getFullYear()
        return `© Copyright ${currentYear} | Mauricette Irene Mendy`
    });
</script>

<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-adress">
                <h3>Mes contacts</h3>
                <address>
                    <a href="mailto:support@gmail.com"><i class="fa fa-envelope"></i>support@gmail.com</a>
                    <a href="tel:+0677777777"><i class="fa fa-phone"></i>+0677777777</a>
                    <p><i class="fa fa-address-card"></i>Paris 75014</p>
                </address>
            </div>
            <div class="footer-borderRight"></div>
            <div class="footer-social">
                <h3> Retrouvez-moi </h3>
                <a class="footer-social-icon" href="https://github.com/Mauricette-g" target="_blank">
                    <img src="@/assets/images/gitHub.png" alt="Logo GitHub">
                </a>
                <a class="footer-social-icon" href="https://www.linkedin.com/in/set-rouarpé-8b7020234/" target="_blank">
                    <img src="@/assets/images/linkedin.ico" alt="Logo LinkedIn">
                </a>
            </div>
        </div>
        <div class="footer-copyright">
            <p>Dernières modifications le<time datetime="2024-08-26">26 aout 2024</time></p>
            <p class="copyright">{{ copyright }}</p>
        </div>
    </footer>
</template>

<style scoped>
    .footer-content {
        display: flex;
        justify-content: space-around;
    }

    footer * {
        background-color: #123d5a;
        color: white;
        padding: 5px;
    }
    
    .footer-borderRight {
        border-right: 2px dashed  white;
    }

    address {
        display: flex;
        justify-content: space-around;
        align-items: start;
        flex-direction: column;
    }

    .footer-copyright {
        text-align: center;
    }

    time {
        font-style: italic;
    }

    .copyright {
        font-style: italic;
        font-size: 0.7em;
    }

    .footer-social-icon:hover {
        opacity: 50%;
    }
</style>