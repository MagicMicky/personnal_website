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
	}]
});
export default Site;