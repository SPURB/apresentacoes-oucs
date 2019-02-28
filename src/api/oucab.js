export default {
	linhadotempo: [
		{
			nome: '2001',
			tipo: 'cinza-pos',
			pontos: [{
				cont: 'Aprovação do <b>Estatuto da Cidade</b>',
				comp: 'Lei Federal 10.257/01',
				destaque: true
			}, {
				cont: 'Aprovação da <b>Operação Urbana Consorciada Água Espraiada</b>',
				comp: 'Lei 13.260/01',
				destaque: false
			}]
		}, {
			nome: '2002',
			tipo: 'cinza-pos',
			pontos: [{
				cont: 'O <b>Plano Diretor Estratégico</b> aprovado pela <b>Lei 13.430</b> trouxe significativas transformações no que diz respeito às <b>Operações Urbanas</b>, refere ao seu conceito, abrangência e à sua operacionalização',
				destaque: true
			}]
		}, {
			nome: '2004',
			tipo: 'cinza-pos',
			pontos: [{
				cont: 'Aprovação da <b>Operação Urbana Consorciada Faria Lima</b>',
				comp: 'Lei 13.769/04',
				destque: false
			}, {
				cont: '<b>Operação Urbana Consorciada Rio Verde-Jacu</b>',
				comp: 'Lei 13.872/04',
				destaque: false
			}, {
				cont: 'Aprovação da <b>Lei de Parcelamento, Uso e Ocupação do Solo (LPUOS)</b>',
				comp: 'Lei 13.885/04',
				destaque: true
			}]
		}, {
			nome: '2013',
			tipo: 'laranja',
			pontos: [{
				cont: 'Aprovação da <b>Operação Urbana Consorciada Água Branca</b>',
				comp: 'Lei 15.893/13',
				destaque: true
			}]
		}, {
			nome: '2014',
			tipo: 'laranja',
			pontos: [{
				cont: 'Constituição do <b>Grupo de Gestão da OUCAB</b>',
				comp: 'Decreto 59.911/14',
				destque: true
			}, {
				cont: '<b>Regulamentação da Lei 15.893/2013 – OUCAB</b>',
				comp: 'Decreto 55.392/14',
				destaque: true
			}, {
				cont: 'Aprovação do <b>Plano Diretor Estratégico – PDE</b>',
				comp: 'Lei 16.050/14',
				destaque: true,
				outer: true
			}]
		}, {
			nome: '2016',
			tipo: 'cinza-pos',
			pontos: [{
				cont: 'Aprovação da <b>Lei de Parcelamento, Uso e Ocupação do Solo (LPUOS)</b>',
				comp: 'Lei 16.402/16',
				destaque: true
			}, {
				cont: '<b>Revogação</b> da Operação Urbana Consorciada Rio Verde-Jacu',
				comp: 'Lei 16.492/16',
				destaque: false
			}]
		}
	],
	grafico1: {
		titulo: 'Participações privadas',
		subtitulo: 'Propostas deferidas, por ano de protocolo',
		x: [
			{
				categoria: '1995',
				taxa: 2
			}, {
				categoria: '2001',
				taxa: 1
			}, {
				categoria: '2002',
				taxa: 2
			}, {
				categoria: '2003',
				taxa: 4
			}, {
				categoria: '2004',
				taxa: 3
			}, {
				categoria: '2005',
				taxa: 2
			}, {
				categoria: '2006',
				taxa: 9
			}, {
				categoria: '2007',
				taxa: 7
			}, {
				categoria: '2008',
				taxa: 6
			}, {
				categoria: '2009',
				taxa: 4
			}, {
				categoria: '2010',
				taxa: 4
			}, {
				categoria: '2011',
				taxa: 14
			}, {
				categoria: '2012',
				taxa: 13
			}, {
				categoria: '2013',
				taxa: 12
			}
		],
		y: [ 0, 5, 10, 15 ],
		legendaX: 'Anos',
		legendaY: 'Nº de propostas'
	},
	grafico2: {
		titulo: '',
		subtitulo: '',
		x: [
			{
				categoria: '1995',
				taxa: 58443
			}, {
				categoria: '2001',
				taxa: 0
			}, {
				categoria: '2002',
				taxa: 53855
			}, {
				categoria: '2003',
				taxa: 9150
			}, {
				categoria: '2004',
				taxa: 13665
			}, {
				categoria: '2005',
				taxa: 15285
			}, {
				categoria: '2006',
				taxa: 98810
			}, {
				categoria: '2007',
				taxa: 37076
			}, {
				categoria: '2008',
				taxa: 99060
			}, {
				categoria: '2009',
				taxa: 32164
			}, {
				categoria: '2010',
				taxa: 46581
			}, {
				categoria: '2011',
				taxa: 136309
			}, {
				categoria: '2012',
				taxa: 101714
			}, {
				categoria: '2013',
				taxa: 109647
			}
		],
		y: [ 0, 20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000 ],
		legendaX: 'Anos',
		legendaY: 'Área adicional de construção consumida (m²)'
	},
	mapa1: {
		conjunto1: {
			nome: 'Viário',
			caption: 'Intervenções viárias',
			pontos: [ {
				legenda: '1',
				titulo: 'Ponte Júlio de Mesquita Neto',
				coordX: 44,
				coordY: 17,
				info_pares: [ {
					'Status': 'concluída (1996)'
				}, {
					'Fonte recurso': 'Tesouro'
				} ]
			}, {
				legenda: '2a',
				titulo: 'Av. Auro Soares de Moura Andrade (trecho parcial)',
				coordX: 36,
				coordY: 37,
				info_pares: [ {
					'Status': 'concluída (2000/2006)',
				}, {
					'Fonte recurso': 'Contrapartida Adesões Privadas'
				} ]
			}, {
				legenda: '2b',
				titulo: 'Prolongamento da Av. Auro Soares de Moura Andrade',
				coordX: 50,
				coordY: 43,
				info_pares: [ {
					'Status': 'em projeto',
				}, {
					'Valor estimado da obra': 'R$ 160 milhões',
				}, {
					'Fonte recurso': 'OODC'
				} ]
			}, {
				legenda: '3',
				titulo: 'Conexões Av. Francisco Matarazzo e Rua Tagipuru',
				coordX: 64,
				coordY: 55,
				info_pares: [ {
					'Status': 'em andamento',
				}, {
					'Valor estimado da obra': 'R$ 10 milhões',
				}, {
					'Valor contratatado laudo ambiental': 'R$ 86.592',
				}, {
					'Fonte recurso': 'OODC'
				} ]
			} ]
		},
		conjunto2: {
			nome: 'HIS e equipamentos públicos',
			caption: 'Intervenções de HIS, Áreas Públicas e Institucionais',
			pontos: [ {
				legenda: '4',
				titulo: 'Obra emergencial',
				coordX: 43,
				coordY: 15,
				info_pares: [ {
					'Status': 'em obras',
				}, {
					'Valor contratado': 'R$ 1.682.010',
				}, {
					'Fonte recurso': 'CEPAC'
				} ]
			}, {
				legenda: '5',
				titulo: 'Subsetor A1',
				coordX: 43,
				coordY: 15,
				info_pares: [ {
					sub: 'Projeto Subsetor A1',
				}, {
					'Status': 'em elaboração',
				}, {
					'Valor estimado do projeto': 'R$ 6.180.391',
				}, {
					'Fonte recurso': 'CEPAC'
				} ]
			}, {
				legenda: '5',
				titulo: 'Subsetor A1',
				coordX: 43,
				coordY: 15,
				info_pares: [ {
					sub: 'HIS – Subsetor A1 (1ª fase)',
				}, {
					'Status': 'em projeto',
				}, {
					'Valor estimado da obra': 'R$ 170 milhões',
				}, {
					'Fonte recurso': 'OODC'
				} ]
			}, {
				legenda: '#efddb8',
				titulo: 'Gerenciamento social',
				coordX: 43,
				coordY: 15,
				info_pares: [ {
					'Status': 'em andamento',
				}, {
					'Valor contratado': 'R$ 611.865',
				}, {
					'Fonte recurso': 'OODC'
				} ]
			} ]
		},
		conjunto3: {
			nome: 'Drenagem',
			caption: 'Intervenções de Drenagem',
			pontos: [ {
				legenda: '6',
				titulo: 'Obras de drenagem dos córregos Água Preta e Sumaré',
				coordX: 43,
				coordY: 15,
				info_pares: [ {
					'Status': 'em finalização',
				}, {
					'Valor contratado': 'R$ 208.593.477',
				}, {
					'Valor a contratar': 'R$ 20 milhões',
				}, {
					'Fonte recurso': 'OODC'
				} ]
			} ]
		}
	}
}
