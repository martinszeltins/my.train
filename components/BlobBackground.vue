<template>
    <div class="blob-c">
        <div class="shape-blob"></div>
        <div class="shape-blob one"></div>
        <div class="shape-blob two"></div>
        <div class="shape-blob three"></div>
        <div class="shape-blob four"></div>
        <div class="shape-blob five"></div>
        <div class="shape-blob six"></div>
	</div>
</template>

<style>
    .blob-c {
        min-height: 100vh;
        overflow: hidden;
        position:absolute;
        width: 100%;
        filter: blur(40px);
    }

    .shape-blob {
        background: #f7b500;
        height: 300px;
        width: 400px;
        border-radius: 40% 50% 30% 40%;
        animation: 
            transform 18s ease-in-out infinite both alternate,
            movement_one 12s ease-in-out infinite both;
        opacity:.12;
        position: absolute;
        left: 75%;
        top: 40%;
    }

    .shape-blob.one{
        background: #f7b500;
        height: 250px;
        width: 300px;
        left: 10px;
        top: 30%;
        transform: rotate(-180deg);
        animation: transform 8s ease-in-out infinite both alternate, movement_two 20s ease-in-out infinite both;
    }

    .shape-blob.six{
        background: #f7b500;
        height: 200px;
        width: 300px;
        left: 50%;
        top: 40%;
        transform: rotate(-180deg);
        animation: transform 5s ease-in-out infinite both alternate, movement_two 5s ease-in-out infinite both;
    }

    .shape-blob.four{
        background: #f7b500;
        height: 200px;
        width: 250px;
        left: 350px;
        top: 70%;
        transform: rotate(-180deg);
        animation: transform 17s ease-in-out infinite both alternate, movement_two 13s ease-in-out infinite both;
    }

    .shape-blob.five{
        background: #f7b500;
        height: 200px;
        width: 200px;
        left: 480px;
        top: 40%;
        transform: rotate(-180deg);
        animation: transform 12s ease-in-out infinite both alternate, movement_two 18s ease-in-out infinite both;
    }

    .shape-blob.two{
        background: #f7b500;
        height: 250px;
        width: 250px;
        left: 60%;
        top: 150px;
        transform: rotate(-180deg);
        animation: transform 10s ease-in-out infinite both alternate, movement_two 10s ease-in-out infinite both;
    }

    .shape-blob.three{
        background: #f7b500;
        height: 150px;
        width: 150px;
        left: 800px;
        top: 30px;
        transform: rotate(-180deg);
        animation: transform 7s ease-in-out infinite both alternate, movement_two 23s ease-in-out infinite both;
    }

    @keyframes transform {
        0%,
        100% { border-radius: 33% 67% 70% 30% / 30% 40% 70% 70%; } 
        20% { border-radius: 37% 63% 51% 49% / 37% 35% 35% 63%; } 
        40% { border-radius: 36% 64% 64% 36% / 64% 48% 52% 26%; } 
        60% { border-radius: 37% 63% 51% 49% / 30% 30% 70% 73%; } 
        80% { border-radius: 40% 60% 42% 58% / 51% 51% 49% 59%; } 
    }


    @keyframes movement_one {
        0%,
        100% { transform: none; }
        50% { transform: translate(50%, 20%) rotateY(10deg) scale(1); }
    }

    @keyframes movement_two {
        0%,
        500% { transform: none; }
        50% { transform: translate(50%, 20%) rotate(-200deg) scale(1.3);}
    }
</style>
