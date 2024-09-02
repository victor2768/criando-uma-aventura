const  avanca  =  document . querySelectorAll ( '.btn-proximo' ) ;

avanca . forEach ( botão  =>  {
    botão . addEventListener ( 'clique' ,  função ( ) {
        const  atual  =  documento . querySelector ( '.ativo' ) ;
        const  proximoPasso  =  'passo-'  +  this . getAttribute ( 'data-proximo' ) ;

        atual . lista de classes . remover ( 'ativo' ) ;
        documento . getElementById ( proximoPasso ) . classList . add ( 'ativo' ) ;
    } )
} )