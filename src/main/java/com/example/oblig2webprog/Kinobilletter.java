package com.example.oblig2webprog;

public class Kinobilletter {
    private String film;
    private int antall;
    private String fornavn;
    private String etternavn;
    private int telefonnr;
    private String epost;

    public Kinobilletter(String film, int antall, String fornavn,String etternavn, int telefonnr, String epost ){
        this.antall = antall;
        this.film = film;
        this.fornavn = fornavn;
        this.etternavn =  etternavn;
        this.epost = epost;
        this.telefonnr = telefonnr;
    }

    public int getAntall() {
        return antall;
    }

    public void setAntall(int antall) {
        this.antall = antall;
    }
    public String getFilm() {
        return film;
    }
    public void setFilm(String film) {
        this.film = film;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }
    public String getEtternavn() {
        return etternavn;
    }
    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }


    public int getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(int telefonnr) {
        this.telefonnr = telefonnr;
    }
    public String getEpost() {
        return epost;
    }
    public void setEpost(String epost) {
        this.epost = epost;
    }

}
