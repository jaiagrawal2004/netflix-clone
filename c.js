const movies = [

{
title:"Avengers Endgame",
category:"Action",
rating:9.5,
views:9800,
description:"The Avengers assemble once more to undo Thanos' snap and restore balance.",
image:"images/avengers.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/TcMBFSGVi1c"
},

{
title:"John Wick",
category:"Action",
rating:8.7,
views:8600,
description:"A retired hitman returns to the underworld to avenge his dog.",
image:"images/john wick.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/2AUmvWm5ZDQ"
},

{
title:"Mad Max Fury Road",
category:"Action",
rating:8.8,
views:8300,
description:"Max teams with Furiosa to escape a tyrant in a desert wasteland.",
image:"images/mad max.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/hEJnMQG9ev8"
},

{
title:"The Dark Knight",
category:"Action",
rating:9.3,
views:9400,
description:"Batman faces the Joker, a criminal mastermind threatening Gotham.",
image:"images/dark knight.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/EXeTwQWrcwY"
},

{
title:"Mission Impossible Fallout",
category:"Action",
rating:8.4,
views:7600,
description:"Ethan Hunt races against time after a mission goes wrong.",
image:"images/mission impossible.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/wb49-oV0F78"
},

{
title:"Gladiator",
category:"Action",
rating:8.5,
views:8100,
description:"A Roman general seeks revenge after betrayal.",
image:"images/gladiator.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/owK1qxDselE"
},

{
title:"Interstellar",
category:"SciFi",
rating:9.2,
views:9100,
description:"Explorers travel through a wormhole to save humanity.",
image:"images/interstellar.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"
},

{
title:"Inception",
category:"SciFi",
rating:9.0,
views:9000,
description:"A thief steals secrets from dreams using advanced technology.",
image:"images/inception.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/YoHD9XEInc0"
},

{
title:"The Matrix",
category:"SciFi",
rating:8.8,
views:8700,
description:"A hacker discovers reality is a simulation controlled by machines.",
image:"images/the matrix.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/vKQi3bBA1y8"
},

{
title:"Avatar",
category:"SciFi",
rating:8.5,
views:8200,
description:"A marine joins an alien world and fights to protect it.",
image:"images/avatar.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/5PSNL1qE6VY"
},

{
title:"Blade Runner 2049",
category:"SciFi",
rating:8.3,
views:7900,
description:"A young blade runner discovers a secret that could change the world.",
image:"images/blade runner.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/gCcx85zbxz4"
},

{
title:"Dune",
category:"SciFi",
rating:8.4,
views:8000,
description:"A young noble must protect a valuable desert planet.",
image:"images/dune.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/n9xhJrPXop4"
},

{
title:"Fight Club",
category:"Drama",
rating:8.9,
views:8800,
description:"An office worker forms an underground fight club.",
image:"images/fight club.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/SUXWAEX2jlg"
},

{
title:"Forrest Gump",
category:"Drama",
rating:8.8,
views:8600,
description:"A man witnesses major historical events through his life journey.",
image:"images/forrest gump.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/bLvqoHBptjg"
},

{
title:"Whiplash",
category:"Drama",
rating:8.6,
views:8100,
description:"A drummer faces intense training from a ruthless teacher.",
image:"images/whiplash.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/7d_jQycdQGo"
},

{
title:"The Social Network",
category:"Drama",
rating:8.2,
views:7500,
description:"The story behind the creation of Facebook.",
image:"images/social network.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/lB95KLmpLR4"
},

{
title:"The Shawshank Redemption",
category:"Drama",
rating:9.3,
views:9400,
description:"A banker forms an unlikely friendship inside prison.",
image:"images/shawshank redemption.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/6hB3S9bIaco"
},

{
title:"Deadpool",
category:"Comedy",
rating:8.2,
views:7700,
description:"A wisecracking mercenary gains superpowers and seeks revenge.",
image:"images/deadpool.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/ONHBaC-pfsk"
},

{
title:"The Hangover",
category:"Comedy",
rating:8.0,
views:7200,
description:"Three friends wake up after a wild bachelor party.",
image:"images/hangover.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/tcdUhdOlz9M"
},

{
title:"Superbad",
category:"Comedy",
rating:7.8,
views:6900,
description:"Two high school friends plan one unforgettable party.",
image:"images/superbad.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/4eaZ_48ZYog"
},

{
title:"Ted",
category:"Comedy",
rating:7.7,
views:6700,
description:"A grown man deals with his foul-mouthed teddy bear.",
image:"images/ted.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/9fbo_pQvU7M"
},

{
title:"Joker",
category:"Thriller",
rating:8.9,
views:9100,
description:"A failed comedian descends into madness.",
image:"images/joker.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/zAGVQLHvwOY"
},

{
title:"Se7en",
category:"Thriller",
rating:8.7,
views:8300,
description:"Two detectives hunt a serial killer using deadly sins.",
image:"images/se7en.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/znmZoVkCjpI"
},

{
title:"Shutter Island",
category:"Thriller",
rating:8.6,
views:8100,
description:"A US marshal investigates a psychiatric facility.",
image:"images/shutterisland.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/5iaYLCiq5RM"
},

{
title:"Gone Girl",
category:"Thriller",
rating:8.3,
views:7800,
description:"A husband becomes the prime suspect in his wife's disappearance.",
image:"images/gonegirl.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/0VGD_jLyE9Y"
},

{
title:"Prisoners",
category:"Thriller",
rating:8.1,
views:7400,
description:"A desperate father takes matters into his own hands.",
image:"images/prisoners.jpg",
preview:"",
trailer:"https://www.youtube.com/embed/bpXfcTF6iVk"
}

]