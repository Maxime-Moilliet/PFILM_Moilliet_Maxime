<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" 
    integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
    <title>Festival de films</title>
</head>
<body>
    
    <header class="header">
        <a href="#">Films de Plein Air</a>
    </header>

    <section class="banner">
        <h1 class="banner__title">Découvrez le meilleur du cinéma en plein air !</h1>
        <p class="banner__content text-content">
            L'association Films de Plein Air regroupe des passionnés de films d'auteur.
            En partenariat avec la Mairie du 8ème arrondissement à Paris, nous mettons à disposition le parc Monceau, à l'occasion du festival "Films de Plein Air".
        </p>
    </section>

    <main class="container">

        <section class="about">
            <div>
                <h2 class="about__title title-section">Le festival des films de plein air !</h2>
                <p class="about__content text-content">
                Bienvenue au festival des films de plein air !
                <br>
                Pour cette première édition du festival, nous vous proposons de découvrir des films d'auteur grand public.
                <br>
                Vous pourrez assister au en plein air, à la projection de films français ou américains, qui vous plongeront dans l'univers de chaque réalisateur.
                <br>
                Des projections sur un écran de 10 mètres de hauteur se dérouleront du 5 au 8 août 2022 en plein cœur du parc Monceau, à Paris.
                </p>
            </div>
            <img src="./assets/flyer.png" alt="flyer festival de films">
        </section>  

        <section class="movies">
            <h2 class="movies__title title-section">Nos prochaines date de projections</h2>

            <div class="swiper js-swiper-days movies__wrapper">
                <div class="swiper-wrapper">
                    <span class="swiper-slide js-day movies__day active" data-day="05/08">
                        Le vendredi 5 août
                    </span>
                    <span class="swiper-slide js-day movies__day" data-day="06/08">
                        Le samedi 6 août
                    </span>
                    <span class="swiper-slide js-day movies__day" data-day="07/08">
                        Le dimanche 7 août
                    </span>
                    <span class="swiper-slide js-day movies__day" data-day="08/08">
                        Le lundi 8 août
                    </span>
                </div>
            </div>

            <div class="swiper js-swiper-movies movies__wrapper">
                <div class="swiper-wrapper">
                   <!-- cards movies -->
                </div>
                <div class="swiper-movie-button-next">
                    <button>
                        <i class="fas fa-angle-right"></i>
                    </button>
                </div>
                <div class="swiper-movie-button-prev">
                    <button>
                        <i class="fas fa-angle-left"></i>
                    </button>
                </div>
            </div>
        </section>

    </main>

    <script src="./js/slider-days.js" type="module" defer></script>
    <script src="./js/slider-movies.js" type="module" defer></script>
    <script src="./js/select-movies.js" type="module" defer></script>
</body>
</html>