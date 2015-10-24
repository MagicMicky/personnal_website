import DS from 'ember-data';
var Site = DS.Model.extend({
	nav: DS.attr(),
	intro: DS.attr(),
	aboutUs: DS.attr(),
	quote: DS.attr(),
	experience: DS.attr(),
	portfolio: DS.attr(),
	socials:DS.attr(),
	theend: DS.attr()
});
Site.reopenClass({
	FIXTURES: [{
		"id": 1,
		"nav": [{
			"link": "home",
			"text": "Acceuil"
		}, {
			"link": "aboutUs",
			"text": "Qui suis-je"
		}, {
			"link": "experience",
			"text": "Experiences"
		}, {
			"link": "portfolio",
			"text": "Portfolio"
		}],
		"intro": {
			"slider": [{
				"title": "Android Ninja",
				"text": "Développement de plusieurs applications Android."
			}, {
				"title": "Node.js enthusiast",
				"text": "Développement de backend web en utilisant Node.js"
			}, {
				"title": "Focus sur l'UI et l'UX",
				"text": "J'ai pris pour habitude de me concentrer sur l'experience utilisateur et sur le design de mes applications."
			}, ],
			"text": {
				"title": "Développeur android & backend web",
				"text": "Etudiant en <strong>informatique</strong> à l'INSA de Toulouse, je recherche actuellement un <strong>stage de fin d'études</strong> en informatique dans le domaine du développement mobile ou du développement backend web. J'édite par ailleurs un <a href='http://magicmicky.github.io'>blog technique</a> quant à mes différentes expériences liées au développements."
			},
		},
		"aboutUs": {
			"title": "Prêt pour de l'action ?",
			"skills": [{
				"icon": "fa-android",
				"title": "Developpement <span class='id-color'>Android</span></h3>",
				"text": "J'ai appris le développement <strong>Android</strong> au travers de divers projets personnels qui m'ont permis d'atteindre un niveau de connaissance assez poussés."
			}, {
				"icon": "icon-nodejs",
				"title": "Developpement <span class='id-color'>Node.js</span>",
				"text": "J'apprécie beaucoup <strong>Node.js</strong> pour sa fiabilité, sa rapidité, et ses traitements asynchrone. Un grand point positif pour un backend !"
			}, {
				"icon": "fa-github",
				"title": "Addict d'<span class='id-color'>Open Source</span></h3>",
				"text": "Depuis toujours j'ai aimé travailler et partager mes projets en <strong>Open Source</strong>. Vous pouvez en retrouvez quelques un sur mon <a href='http://github.com/MagicMicky'>GitHub</a>"
			}]
		},
		"quote": {
			"text": "Never tell me the odds.",
			"author": "Harrison Ford"
		},
		"experience": {
			"title": "Experiences professionnels",
			"text": "lorem ipsum",
			"timeline": [{
				"month": "Jun",
				"year": "2015",
				"events": [{
					"isScholar": false,
					"title": "Developpeur web (intern) - <strong>Payname</strong>",
					"text": "Lors de ma 2<sup>ème</sup> année du cycle d'ingénieur de l'INSA de Toulouse, j'ai eu l'occasion de faire un stage dans la startup Payname. Payname, jeune fintech, facilitant le paiement entre particulier, avait décider de changer la totalité de leurs services. J'ai donc pu développer le module faisant <strong>l'intermédiaire</strong> entre les différents prestataire de paiements et notre services. Je me suis ainsi plongés dans les tréfonds des virements et prélèvements <strong>SEPA</strong> et de la gestion du <strong>3D Secure</strong> par les banques. Au travers de ce stage, j'ai aussi pu m'impliquer dans la <strong>mise en production</strong> de la nouvelle version du site web.",
					"badges": [{
						"icon": "icon-nodejs",
						"title": "Node.js"
					}, {
						"icon": "icon-postgres",
						"title": "Postgres"
					}, {
						"icon": "icon-script",
						"title": "Bash"
					}],
					"date": "06/2015 - 08/2015"
				}]
			}, {
				"month": "Mai",
				"year": "2014",
				"events": [{
					"isScholar": false,
					"title": "Développeur polyvalent - <strong>Popcorn</strong>",
					"text": "En 2014, j'ai eu la folle idée de vouloir me lancer dans un projet personnel me tenant à coeur. Avec mon frère <a href='https://twitter.com/ThomasGoubin'>@thomasgoubin</a> nous avons développer l'idée de simplifier les systèmes de paiements dans les magasins physique, de manière à <strong>désengeorger les files d'attentes</strong>. Durant ce projet, j'ai eu l'occasion de participer à plusieurs réunion et démarchages clients, tout en étant responsable du développement technique du projet. J'ai ainsi pu développer un PoC fonctionnel du système à l'aide d'une application <strong>Android</strong> et d'un backend sur <strong>Google App Engine</strong>. Le projet c'est malheureusement terminer sur un manque d'investissement de notre part, principalement du à un manque de temps.",
					"badges": [{
						"icon": "icon-java",
						"title": "Java"
					}, {
						"icon": "fa-android",
						"title": "Android"
					}, {
						"icon": "icon-google-developers",
						"title": "Google App Engine"
					}],
					"date": "02/2014 - 10/2014"
				}]
			}, {
				"month": "Sep",
				"year": "2013",
				"events": [{
					"isScholar": true,
					"title": "INSA Toulouse",
					"text": "Suite à mon DUT en Informatique, j'ai pu rentrer dans le cycle <strong>ingénieur</strong> à l'INSA de Toulouse. La formation étant moins technique, je pense avoir acquis plus de connaissance et une culture relative à l'informatique en générale, me permettant d'acquérir un profil beaucoup plus <strong>polyvalent</strong> qu'aurparavant.",
					"badges": [{
						"icon": "icon-c",
						"title": "C"
					}, {
						"icon": "icon-cplusplus",
						"title": "C++"
					}, {
						"icon": "icon-mysql",
						"title": "Mysql"
					}, {
						"icon": "icon-debian",
						"title": "Systèmes Unix"
					}],
					"date": "09/2013 - Present"
				}]
			}, {
				"month": "Jan",
				"year": "2013",
				"events": [{
					"isScholar": true,
					"title": "Stage & étude en Irlande",
					"text": "En 2013, j'ai eu l'occasion de partir pour un semestre à l'étranger, en Irlande. La bas, j'ai pu suivre des cours relatif à l'informatique (notamment aux <strong>bases de données</strong> et à <strong>l'experience utilisateurs</strong>), tout en étant en alternance dans une jeune startup irlandaise, <strong><a href='https://salaso.com/'>Salaso</a></strong>, ou j'ai pu faire du développement web à l'aide du framework <strong>Yii</strong>, ainsi que developper un prototype d'application <strong>Android</strong>.",
					"badges": [{
						"icon": "icon-php",
						"title": "PHP"
					}, {
						"icon": "icon-database",
						"title": "Database"
					}, {
						"icon": "icon-javascript",
						"title": "Javascript"
					}],
					"date": "01/2013 - 07/2013"
				}]
			}, {
				"month": "Sep",
				"year": "2011",
				"events": [{
					"isScholar": false,
					"title": "IUT A Paul Sabatier",
					"text": "En 2011, j'ai pu effectué sur deux ans la formation <strong>Informatique de l'IUT Paul Sabatier</strong> à Toulouse. Orienté vers l'aspect technique de l'informatique, j'ai pu effectuer un focus sur plusieurs <strong>technologies</strong> et paradigmes de la programation et de l'informatique en général. Pendant ce temps la, j'ai aussi pris le temps de développer plusieurs projets personnels, et commencer à m'intéresser à la programmation Android",
					"badges": [{
						"icon": "icon-c",
						"title": "C"
					}, {
						"icon": "icon-cplusplus",
						"title": "C++"
					}, {
						"icon": "icon-java",
						"title": "Java"
					}, {
						"icon": "icon-mysql",
						"title": "Mysql"
					}],
					"date": "09/2011 - 06/2013"
				}]
			}]
		},
		"portfolio": {
			"title": "Portfolio",
			"text": "Des projets en veux-tu en voilà ! <em>La plupart de ces projets ont été réalisés en équipe.</em>",
			"projects": [{
				"title": "Popcorn",
				"image": "images/portfolio/popcorn1.png",
				"text": "Développement d'une application mobile et d'un backend web pour supprimer les files d'attentes",
				"badges": [{
					"icon": "fa-android",
					"title": "Android"
				}, {
					"icon": "icon-java",
					"title": "Java"
				}, {
					"icon": "icon-google-developers",
					"title": "Google App Engine"
				}]
			}, {
				"title": "DaVinciRoad",
				"image": "images/portfolio/davinciroad/1.png",
				"text": "Un site-plateforme pour regrouper et partager des photos et des infos pendant des voyages à l'étranger.",
				"link":"http://davinciroad.it",
				"badges": [{
					"icon": "icon-nodejs",
					"title": "Node.js"
				}, {
					"icon": "icon-nginx",
					"title": "Nginx"
				}]
			}, {
				"title": "Habit Andro RPG",
				"image": "images/portfolio/habitrpg.webp",
				"text": "Application Android liées à l'api du site web HabitRPG. Aujourd'hui récupérée comme applications officielle",
				"link": "https://play.google.com/store/apps/details?id=com.magicmicky.habitrpgmobileapp",
				"badges": [{
					"icon": "fa-android",
					"title": "Android"
				}, {
					"icon": "icon-java",
					"title": "Java"
				}]
			}, {
				"title": "MakeUrSport",
				"image": "https://www.youtube.com/embed/OyMJaEzCo2E",
				"imageIsYoutube":true,
				"text": "Développées dans le cadre du DUT, application sportive permettant le suivi temps réel lors d'une course.",
				"link": "https://play.google.com/store/apps/details?id=com.makeursport",
				"badges": [{
					"icon": "fa-android",
					"title": "Android"
				}, {
					"icon": "icon-java",
					"title": "Java"
				}, {
					"icon": "icon-database",
					"title": "Databases"
				}]
			}, {
				"title": "Zosterops",
				"image": "images/portfolio/ptut.jpg",
				"text": "Projet tutoré à l'INSA de Toulouse, gestion à distance d'une camera pour s'immerser dans un contenu inconnu. ",
				"link": "https://github.com/Zosterops/",
				"badges": [{
					"icon": "fa-android",
					"title": "Android"
				}, {
					"icon": "icon-raspberrypi",
					"title": "Raspberry Pi"
				}]
			}, {
				"title": "@BonneMangeoire",
				"image": "images/portfolio/labonnemangeoire2.jpg",
				"text": "Une mangeoire connectée à un compte twitter, permettant une prise de photo d'un oiseau venant se régaler !",
				"link": "http://twitter.com/BonneMangeoire",
				"badges": [{
					"icon": "icon-python",
					"title": "Python"
				}, {
					"icon": "icon-raspberrypi",
					"title": "Raspberry pi"
				}, {
					"icon": "fa-twitter-square",
					"title": "API Twitter"
				}]
			}]
		},
		"socials": {
			open: "fa-thumbs-o-up",
			close: "fa-times",
			icons: [{
				"title":"Twitter",
				"icon": "fa-twitter",
				"link": "https://twitter.com/MagicMicky"
			},{
				"title":"GitHub",
				"icon": "fa-github",
				"link": "https://github.com/MagicMicky"
			},{
				"title":"Linkedin",
				"icon": "fa-linkedin",
				"link": "https://fr.linkedin.com/in/mgoubin"
			},{
				"title":"StackOverflow",
				"icon": "fa-stack-overflow",
				"link": "http://stackoverflow.com/users/1376834/magicmicky"
			}],
		},
		"theend": {
			"picture": "/images/itsmemario.jpeg",
			"title":"Mais encore !",
			"text":"Adepte de séries tv (particulièrement de SF), même que des fois je donne <a href='http://www.senscritique.com/MagicMicky'>des notes</a> (mais je suis gentil quand même). Membre du <a href='http://toulouseaug.blogspot.fr/''>Toulouse Android User Group</a>, j'ai des articles publiées dans Android Weekly (<a href='http://androidweekly.net/issues/issue-111'>#1</a>, <a href='http://androidweekly.net/issues/issue-113'>#2</a>), j'aime bien <a href='http://open.spotify.com/user/magic-micky'>écouter de la musique</a>, jouer à certains jeux vidéos. J'ai même un <a class='fancybox' rel='gal1' href='images/chat1.jpg'>petit chat</a> (<a class='fancybox' rel='gal1' href='images/chat2.jpg'>#hearmeroar</a>)! Oh, et ce site est complètement <a href='https://github.com/MagicMicky/personnal_website'>Open Source</a> !"
		}
	}, {
		"id": 2,
		"nav": [{
			"link": "home",
			"text": "Home"
		}, {
			"link": "aboutUs",
			"text": "About me"
		}, {
			"link": "experience",
			"text": "Experiences"
		}, {
			"link": "portfolio",
			"text": "Portfolio"
		}],
		"intro": {
				"slider": [{
					"title": "Android Ninja",
					"text": "Development of multiple Android application."
				}, {
					"title": "Node.js enthusiast",
					"text": "Web backend developpement using Node.js."
				}, {
					"title": "UI/UX focus",
					"text": "When working on front-end solution, I believe you should absolutely focus on UI/UX design."
				}, ],
				"text": {
					"title": "Android &amp; backend developper",
					"text": "<strong>Software Engineering</strong> student in INSA of Toulouse. I'm currently looking for a <strong>post-graduate internship</strong> in mobile app/backend developpement. I also own a <a href='http://magicmicky.github.io'>technical blog</a>, to talk about my developpement experiences."
				},
			},
		"aboutUs": {
			"title": "Ready for some action?",
			"skills": [{
				"icon": "fa-android",
				"title": " <span class='id-color'>Android</span> Developpement",
				"text": "I learned <strong>Android</strong> developpement through projects that lead me to some expertise in this field."
			}, {
				"icon": "icon-nodejs",
				"title": "Developpement <span class='id-color'>Node.js</span>",
				"text": "I quite enjoy <strong>Node.js</strong> for its fiability, speed, and asynchronous flow control. Some great points for backend development!"
			}, {
				"icon": "fa-github",
				"title": "<span class='id-color'>Open Source</span></h3> is awesome",
				"text": "I've always been found of <strong>Open Source</strong> projects. You can even find some on my <a href='http://github.com/MagicMicky'>GitHub</a>"
			}]
		},
		"quote": {
			"text": "Never tell me the odds.",
			"author": "Harrison Ford"
		},
		"experience": {
			"title": "Professional experiences",
			"text": "You can call it jobs.",
			"timeline": [{
				"month": "Jun",
				"year": "2015",
				"events": [{
					"isScholar": false,
					"title": "Web developper (intern) - <strong>Payname</strong>",
					"text": "On my postgraduate degree, in the INSA of Toulouse, I managed to find a job in an awesome startup : Payname. Payname, a yound fintech that facilitate paiement between individuals had decided to change the totality of their services. Thanks to this intership, I managed to get involved in the production phase of the new website.",
					"badges": [{
						"icon": "icon-nodejs",
						"title": "Node.js"
					}, {
						"icon": "icon-postgres",
						"title": "Postgres"
					}, {
						"icon": "icon-script",
						"title": "Bash"
					}],
					"date": "06/2015 - 08/2015"
				}]
			}, {
				"month": "Mai",
				"year": "2014",
				"events": [{
					"isScholar": false,
					"title": "Versatile developer - <strong>Popcorn</strong>",
					"text": "In 2014 I had the crazy idea to focus my mind on a personnal project dear to my heart. With my brother <a href='https://twitter.com/ThomasGoubin'>@ThomasGoubin</a> we wanted to create a system that would simplify paiements in physical shops, so that we could <strong>reduce waiting time</strong> in queues. During this project, I got involved in multiple meetings and in identifying potential customers. But most of all, I was in charge of all the technical development of the project. I created a functionnal PoC in the form of an <strong>Android</strong> application and a Java backend, hosted on <strong>Google Cloud Endpoints</strong>. Unfortunately, the project ended because of a lack of invetment from our end, mostly due to a lack fo time.",
					"badges": [{
						"icon": "icon-java",
						"title": "Java"
					}, {
						"icon": "fa-android",
						"title": "Android"
					}, {
						"icon": "icon-google-developers",
						"title": "Google App Engine"
					}],
					"date": "02/2014 - 10/2014"
				}]
			}, {
				"month": "Sep",
				"year": "2013",
				"events": [{
					"isScholar": true,
					"title": "INSA Toulouse",
					"text": "Following my DUT in Informatique, I managed to get into the engineering school called INSA of Toulouse, majoring in Software engineering. This formation let me acquire quite some knowledge about Computer Science paradigmes and patterns. I believe that thanks to this formation, I have acquired a more <strong>versatile</strong> profile.",
					"badges": [{
						"icon": "icon-c",
						"title": "C"
					}, {
						"icon": "icon-cplusplus",
						"title": "C++"
					}, {
						"icon": "icon-mysql",
						"title": "Mysql"
					}, {
						"icon": "icon-debian",
						"title": "Systèmes Unix"
					}],
					"date": "09/2013 - Present"
				}]
			}, {
				"month": "Jan",
				"year": "2013",
				"events": [{
					"isScholar": true,
					"title": "Internship & studies in Ireland",
					"text": "In 2013 I managed to spend a whole semester in Ireland. This semester was quite original, because I was able to follow some courses relative to Computer Science (such as an <strong>advanced database</strong> course, and an <strong>User Experience</strong> oriented one) while working, two days a week, in a young irish startup named <strong><a href='https://salaso.com/'>Salaso</a></strong>. During this internship, I worked as a web developper using the <strong>Yii</strong framework. I also were able to work on a prototype of an <strong>Android</strong> application.",
					"badges": [{
						"icon": "icon-php",
						"title": "PHP"
					}, {
						"icon": "icon-database",
						"title": "Database"
					}, {
						"icon": "icon-javascript",
						"title": "Javascript"
					}],
					"date": "01/2013 - 07/2013"
				}]
			}, {
				"month": "Sep",
				"year": "2011",
				"events": [{
					"isScholar": false,
					"title": "DUT in Computer Science",
					"text": "In 2011, I started a two year, undergraduate formation comparable to an Associate Degree in Computer Science. Dedicated to the technical aspect of Computer Science, I managed to work with a few interesting technologies, that were quite interesting. During this time, I also were able to work on some personnal projects, and getting interesting in Android development.",
					"badges": [{
						"icon": "icon-c",
						"title": "C"
					}, {
						"icon": "icon-cplusplus",
						"title": "C++"
					}, {
						"icon": "icon-java",
						"title": "Java"
					}, {
						"icon": "icon-mysql",
						"title": "Mysql"
					}],
					"date": "09/2011 - 06/2013"
				}]
			}]
		},
		"portfolio": {
			"title": "Portfolio",
			"text": "Here comes some projects! <em>Note that most of those projects were realised as a team.</em>",
			"projects": [{
				"title": "Popcorn",
				"image": "images/portfolio/popcorn1.png",
				"text": "Development of a mobile application, using a web backend to remove queuing in physical shops!",
				"badges": [{
					"icon": "fa-android",
					"title": "Android"
				}, {
					"icon": "icon-java",
					"title": "Java"
				}, {
					"icon": "icon-google-developers",
					"title": "Google App Engine"
				}]
			}, {
				"title": "DaVinciRoad",
				"image": "images/portfolio/davinciroad/1.png",
				"text": "A platform to share and gather memories and information when visiting a country, or on trip abroad.",
				"link":"http://davinciroad.it",
				"badges": [{
					"icon": "icon-nodejs",
					"title": "Node.js"
				}, {
					"icon": "icon-nginx",
					"title": "Nginx"
				}]
			}, {
				"title": "Habit Andro RPG",
				"image": "images/portfolio/habitrpg.webp",
				"text": "Android application using the HabitRPG API. Soon to become HabitRPG official Android Application",
				"link": "https://play.google.com/store/apps/details?id=com.magicmicky.habitrpgmobileapp",
				"badges": [{
					"icon": "fa-android",
					"title": "Android"
				}, {
					"icon": "icon-java",
					"title": "Java"
				}]
			}, {
				"title": "MakeUrSport",
				"image": "https://www.youtube.com/embed/OyMJaEzCo2E",
				"imageIsYoutube":true,
				"text": "Developped during my DUT, this is an Android application that allows real time tracking of a run",
				"link": "https://play.google.com/store/apps/details?id=com.makeursport",
				"badges": [{
					"icon": "fa-android",
					"title": "Android"
				}, {
					"icon": "icon-java",
					"title": "Java"
				}, {
					"icon": "icon-database",
					"title": "Databases"
				}]
			}, {
				"title": "Zosterops",
				"image": "images/portfolio/ptut.jpg",
				"text": "Let you control a camera thanks to a Google Cardboard, and let you immerse yourself in a distant environment.", 
				"link": "https://github.com/Zosterops/",
				"badges": [{
					"icon": "fa-android",
					"title": "Android"
				}, {
					"icon": "icon-raspberrypi",
					"title": "Raspberry Pi"
				}]
			}, {
				"title": "@BonneMangeoire",
				"image": "images/portfolio/labonnemangeoire2.jpg",
				"text": "A connected bird feeding device, linked to a twitter account that allows the taking of a picture that want to taste some treats!",
				"link": "http://twitter.com/BonneMangeoire",
				"badges": [{
					"icon": "icon-python",
					"title": "Python"
				}, {
					"icon": "icon-raspberrypi",
					"title": "Raspberry pi"
				}, {
					"icon": "fa-twitter-square",
					"title": "API Twitter"
				}]
			}]
		},
		"socials": {
			"open": "fa-thumbs-o-up",
			"close": "fa-times",
			"icons": [{
				"title":"Twitter",
				"icon": "fa-twitter",
				"link": "https://twitter.com/MagicMicky"
			},{
				"title":"GitHub",
				"icon": "fa-github",
				"link": "https://github.com/MagicMicky"
			},{
				"title":"Linkedin",
				"icon": "fa-linkedin",
				"link": "https://fr.linkedin.com/in/mgoubin"
			},{
				"title":"StackOverflow",
				"icon": "fa-stack-overflow",
				"link": "http://stackoverflow.com/users/1376834/magicmicky"
			}],
		},
		"theend": {
			"picture": "/images/itsmemario.jpeg",
			"title":"Wait, there's more!",
			"text": "TV addict (mostly SciFi), I sometimes try to <a href='http://www.senscritique.com/MagicMicky'>note</a> shows (but I'm easily entertained) Member of the <a href='http://toulouseaug.blogspot.fr/''>Toulouse Android User Group</a>, I have some articles published in Android Weekly (<a href='http://androidweekly.net/issues/issue-111'>#1</a>, <a href='http://androidweekly.net/issues/issue-113'>#2</a>), I like <a href='http://open.spotify.com/user/magic-micky'>listening to music</a>, and playing some video games. I even got a <a class='fancybox' rel='gal1' href='images/chat1.jpg'>kitty cat</a> (<a class='fancybox' rel='gal1' href='images/chat2.jpg'>#hearmeroar</a>)! Oh, and this website is fully <a href='https://github.com/MagicMicky/personnal_website'>Open Source</a> !"
		}
	}]
});
export default Site;