var gajiKotorSebulan = 4500000;
var transportSehari = 10000;
var totalHariKerja = 24;
var infak = 50000;
var tanggunganBPJS = 250000;

var pajak = (gajiKotorSebulan * 25 / 1000);


console.log("gaji kotor : " + gajiKotorSebulan);
console.log("==========================");
console.log("Potongan pajak 2,5% : " + (pajak));
console.log("Potongan BPJS : Rp." + tanggunganBPJS);
console.log("Potongan Infak : " + infak);
console.log("==========================");
console.log("Total potongan : Rp." + (infak + tanggunganBPJS + (pajak)));
console.log("===========================");
console.log("Tunjangan Transport : Rp." + transportSehari);
console.log("Total hari kerja : " + totalHariKerja + " hari");
console.log("===========================");
console.log("Total Tunjangan : Rp." + (totalHariKerja * transportSehari));
console.log("===========================");
console.log("Perhitungan Gaji :\n(Gaji kotor - potongan) + Tunjangan\n(" + gajiKotorSebulan + "-" +
    (infak + tanggunganBPJS + (pajak)) + ") + "+(totalHariKerja* transportSehari));
console.log("===========================");
console.log("Gaji Bersih : Rp."+(gajiKotorSebulan - infak - tanggunganBPJS- pajak +totalHariKerja*transportSehari ));