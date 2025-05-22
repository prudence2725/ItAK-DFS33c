<?php
echo"hello php docker";
enum TirageResultat: string{
  case reussite = 'reussite';
  case  echec = 'echec';
  case  reussitecritique = 'reussitecritique';
  case  fumble = 'fumble';
}


class Tirage {
    public string $resultat;
    public ?int $valeur;

    public function __construct(string $resultat, ?int $valeur){
        $this->resultat = $resultat;
        $this->valeur = $valeur;
    }

    public function estReussite() : bool{
        return $this->resultat === 'reussite' ;
    }
    public function estEchec() : bool{
        return $this->resultat === 'echec' ;
    }
    public function estCritique() : bool{
        return $this->resultat === 'reussitecritique' ;
    }
    public function estFumble() : bool{
        return $this->resultat === 'fumble' ;
    }

    public function afficher(): string {
        if (!is_null($this->valeur)) {
            return $this->resultat . " (valeur: " . $this->valeur . ")";
        }
        return $this->resultat;
    }
}
class De{
    public int $value;
    public function __construct(public readonly int $nbfaces){

    }
    public function roll(){
        $this->value = rand(1,$this->nbfaces);
    }

}
$de20 = new De(20);
$de8 = new De(8);

$de20->roll();
$de8->roll();

var_dump($de20->value);
var_dump($de8->value);

enum PieceResultat:string{
    case pile = 'pile';
    case face = 'face';
}

class Piece{
    public PieceResultat $resultat;

    // Méthode pour lancer la piece
    public function lancer(): void {
        $this->resultat = rand(0,1) === 0? PieceResultat::pile:PieceResultat::face ;
    }

//fonction pour savoir si le resultat est pile(faux)
    public function estpile():bool{
        return $this->resultat === PieceResultat::pile;

    }

    //fonction pour savoir si le resultat est face (vrai)
    public function estface():bool{
        return $this->resultat === PieceResultat::face;
    }

    //Methode pour afficher le resultat
    public function afficher(): string{
        return "Resultat du lancer : ".$this->resultat->value;
    }

    function lancerDeJusquaFaux(int $nbMax,int $nbEssai=0,int $vrai=0) : int{
        //On vérifie si on a atteint le nombre maximal de lancer
        if($nbEssai >= $nbMax){
            return $vrai;
        }
        $piece = new Piece();
        $piece -> lancer();
    
        if($piece->estpile()){ //donc si c'est vrai; alors on continue
            return $this->lancerDeJusquaFaux($nbMax, $nbEssai + 1, $vrai + 1 );
        } else {//si c'est faux, on retourne le nbre de lancer vrai
            return $vrai;
        }
    }

}



//$resultatLance = lancerDeJusquaFaux(8);
//var_dump($resultatLance);
var_dump("resultat lance :".$resultatLance);

$piece = new Piece;
$piece->lancer();
var_dump($piece->resultat);

?>