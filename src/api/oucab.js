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
	}
}
