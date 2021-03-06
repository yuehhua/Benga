import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';

export default class DatabaseInfo extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		const { classes } = this.props;

		if(this.props.database == 1){
			return (
				<div>
					<Typography component="p" style={{ width:'90%',textAlign: 'justify',
					margin:'auto',fontSize:16 }}>
						cgMLST@Taiwan provides a 
						<font style={{ fontStyle:'italic' }}> Vibrio cholerae </font> 
						allele database,
						<font style={{ fontStyle:'italic' }}> V. cholerae </font>
						cgMLST profile database, and tools for cgMLST profiling, strain tracking, 
						and clustering of cgMLST profiles via the internet. cgMLST profiling 
						is based on 2,951 
						<font style={{ fontStyle:'italic' }}> V. cholerae </font> 
						core genes, which are identified from 1,647
						<font style={{ fontStyle:'italic' }}> V. cholerae </font> 
						genomes from the NCBI database. Core genes are designated 
						or those existing in more than 95% of the 1,647 genomes.
					</Typography>
					<br />
					<div style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
	                	<img style={{ width:'95%'}} 
	                	src={require('./static/VC_loci_feq_distribution.png')} />
	            	</div>
	            	<br />
	            	<Typography component="p" style={{ width:'90%',textAlign: 'center',
					margin:'auto',fontSize:16 }}>
						Figure. Frequency of loci (genes) over 1,647
						<font style={{ fontStyle:'italic' }}> V. cholerae </font>
						genomes.
					</Typography>
					<br />
					<Typography component="p" style={{ width:'90%',textAlign: 'justify',
					margin:'auto',fontSize:16 }}>
						The cgMLST profile database contains cgMLST profiles for the 
						<font style={{ fontStyle:'italic' }}> V. cholerae </font> 
						strains with genomic sequences deposited in the NCBI database. 
						Nowadays, the database contains 5,048 cgMLST profiles and will be updated 
						by time.
					</Typography>
					<br />
					<Typography component="p" style={{ width:'90%',textAlign: 'justify',
					margin:'auto',fontSize:16 }}>
						cgMLST@Taiwan was developed in the laboratories of Centers for Disease Control, 
						Ministry of Health and Welfare, Taiwan by Yueh-Hua Tu, Yi-Syong Chen, Bo-Han Chen, 
						Yen-Yi Liu, Yu-Ping Hong, Ru-Hsiou Teng, You-Wun Wang, and Chien-Shun Chiou.
					</Typography>
					<br />
					<h3 style={{ marginLeft:'30px' }}>CITATIONS</h3>
					<br />
					<Typography component="p" style={{ width:'90%',textAlign: 'justify',
					margin:'auto',fontSize:16 }}>
						For publication of results, please cite: 
					</Typography>
					<br />
					<Typography component="p" style={{ width:'90%',textAlign: 'justify',
					margin:'auto',fontSize:16 }}>
						Yueh-Hua Tu, Yi-Syong Chen, Bo-Han Chen, Yen-Yi Liu, Yu-Ping Hong, 
						Ru-Hsiou Teng, You-Wun Wang, and Chien-Shun Chiou. cgMLST@Taiwan: 
						A web service for 
						<font style={{ fontStyle:'italic' }}> Vibrio cholerae </font>
						cgMLST profiling and global strain tracking. 
						J Clin Microbiol. 2019.
					</Typography>
					<br />
					<h3 style={{ marginLeft:'30px' }}>Contact</h3>
					<Typography component="p" style={{ width:'90%',
					margin:'auto',fontSize:16 }}>
						For any question please contact Chien-Shun Chiou by email:
					</Typography>
					<Typography component="p" style={{ width:'90%',textAlign: 'justify',
					margin:'auto',fontSize:16 }}>
						<font style={{ color:'blue', textDecoration:'underline' }}>nipmcsc@cdc.gov.tw</font>
						 &nbsp; or &nbsp;
						 <font style={{ color:'blue', textDecoration:'underline' }}>nipmcsc@gmail.com</font>
					</Typography>
					<br />
				</div>
			)
		}
	}

}