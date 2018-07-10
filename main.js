window.onload=function(){
treeData = [{
  "name": "Jan Cekało",
  "class": "man",
  "textClass": "emphasis",
  "marriages": [{
    "spouse": {
      "name": "Kazimiera Cekało (Zajkowska)",
      "class": "woman"
    },
    "children": [{
  
  "name": "Jan Cekało",
  "class": "man",
  "marriages": [{
    "spouse": {
      "name": "Marianna Cekało (Chludzińska)",
      "class": "woman"
    },
    "children": [{
      "name": "Krzysztof Cekało",
      "class": "man",
      "marriages": [{
        "spouse": {
          "name": "Grażyna Cekało ()",
          "class": "woman"
        },
        "children": [{
          "name": "Marcin Cekało",
          "class": "man",
          "marriages": [{
            "spouse": {
              "name": "Dorota Cekało ()",
              "class": "woman"
            },
			"children": [{
				"name": "Klaudia Cekało",
				"class": "woman"
				}, {
				"name": "Jakub Cekało",
				"class": "man"
			}]
          }]
        }, {
          "name": "Karol Cekało",
          "class": "man",
		  "marriages": [{
			"spouse": {
				"name": "Elżbieta Cekało (Kondzior)",
				"class": "woman"
			}
		  }]
        }, {
          "name": "Krzysztof Cekało",
          "class": "man",
		  "marriages": [{
			"spouse": {
				"name": "Edyta Cekało (Kondzior)",
				"class": "woman"
			},
			"children": [{
				"name": "Hanna Cekało",
				"class": "woman"
			},{
				"name": "Alicja Cekało",
				"class": "woman"
			}
			]
		  }]
        }]
      }]
    }, {
		"name": "Bogdan Cekało",
		"class": "man",
		"marriages": [{
			"spouse": {
				"name": "Maria Cekało",
				"class": "woman"
			},
			"children": [{
				"name": "Monika Cekało",
				"class": "woman",
				"marriages": [{
					"spouse": {
						"name": "Emil Śmigielski",
						"class": "man"
					},
					"children": [{
						"name": "Leon Śmigielski",
						"class": "man"
					}]
				}]
				}, {
				"name": "Wojciech Cekało",
				"class": "man"
			}]
		}]
	}, {
		"name": "Sławomir Cekało",
		"class": "man",
		"marriages": [{
			"spouse": {
				"name": "Dorota Cekało (Tyborowska)",
				"class": "woman"
			},
			"children": [{
				"name": "Tomasz Cekało",
				"class": "man"
			},{
				"name": "Agnieszka Dymko",
				"class": "woman",
				"marriages": [{
					"spouse": {
						"name": "Karol Dymko",
						"class": "man"
					}
				}]
			}]
		}]
	}]
  }]
}, {
	"name": "Bohdan Cekało",
	"class": "man",
	"marriages": [{
		"spouse": {
			"name": "Czesława Cekało (?)",
			"class": "woman"
		},
		"children": [{
			"name": "Krystyna Cekało",
			"class": "woman",
			"marriages":[{
			"spouse": {
				"name": "",
				"class": "man"
			},
				"children": [{
					"name": "Nikolina Cekało",
					"class": "woman",
					"marriages": [{
						"spouse": {
							"name": "",
							"class": "man"
						},
						"children": [{
							"name": "Nias",
							"class": "woman"
						},{
							"name": "Kiana",
							"class": "woman"
						}]
					}]
				}]
			}]
			}, {
			"name": "Jacek Cekało",
			"class": "man",
			"marriages": [{
				"spouse": {
					"name": "Małgorzata Cekało (?)",
					"class": "woman"
				},
				"children": [{
					"name": "Maciej",
					"class": "man"
				}]
			}]
			}, {
			"name": "Mariola Cekało",
			"class": "woman"
			
		}]
	}]
}]
}]
}]


dTree.init(treeData, {
  target: "#graph",
  debug: true,
  height: 800,
  width: document.body.clientWidth-33,
  callbacks: {
    nodeClick: function(name, extra) {
      console.log(name);
    }
  }
});

}