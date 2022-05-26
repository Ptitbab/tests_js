chain = "UUACGCAGUAGA"

ARN = chain.match(/.{1,3}/g);

ARN.map(element => {
   if ( element === "UCU" || "UCC" || "UCG" || "AGU" || "AGC"){
       element = "Sérine"
   }
   else if (element === "CCU" || "CCC" || "CCA" || "CCG"){
       element = "Proline"
   }
    else if (element === "UUA" || "UUG") {
       element = "Leucine"
   }
   else if (element === "UUU" ||  "UUC") {
       element = "Phénylalanine"
   }
   else if (element === "CGU" || "CGC" || "CGA" || "CGG" || "AGA" || "AGG") {
       element = "Arginine"
   }
   else if (element === "UAU" || "UAC") {
       element = "Tyrosine"
   }
   else {
       element = "Unknown"
   }
});

console.log(ARN)

proteine = ARN.map(element => 
    element === "UCU" || "UCC" || "UCG" || "AGU" || "AGC" ? "Sérine":
    element === "CCU" || "CCC" || "CCA" || "CCG" ? "Proline":
    element === "UUA" || "UUG" ? "Leucine":
    element === "UUU" ||  "UUC" ? "Phénylalanine":
    element === "CGU" || "CGC" || "CGA" || "CGG" || "AGA" || "AGG" ? "Arginine":
    element === "UAU" || "UAC" ? "Tyrosine":
    "unknown");

console.log(proteine);