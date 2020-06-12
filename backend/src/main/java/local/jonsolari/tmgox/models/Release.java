package local.jonsolari.tmgox.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;

@Entity
@Table(name = "releases")
public class Release
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long releaseid;

    @Column(nullable = false)
    private String ebaysearch;
    private String discogsid;
    private double price;
    private String title;
    private String artist;
    private String url;

    public Release()
    {
    }

    public Release(String ebaysearch, String discogsid, double price, String title, String artist, String url)
    {
        this.ebaysearch = ebaysearch;
        this.discogsid = discogsid;
        this.price = price;
        this.title = title;
        this.artist = artist;
        this.url = url;
    }

    public long getReleaseid()
    {
        return releaseid;
    }

    public void setReleaseid(long releaseid)
    {
        this.releaseid = releaseid;
    }

    public String getEbaysearch()
    {
        return ebaysearch;
    }

    public void setEbaysearch(String ebaysearch)
    {
        this.ebaysearch = ebaysearch;
    }

    public String getDiscogsid()
    {
        return discogsid;
    }

    public void setDiscogsid(String discogsid)
    {
        this.discogsid = discogsid;
    }

    public double getPrice()
    {
        return price;
    }

    public void setPrice(double price)
    {
        this.price = price;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public String getArtist()
    {
        return artist;
    }

    public void setArtist(String artist)
    {
        this.artist = artist;
    }

    public String getUrl()
    {
        return url;
    }

    public void setUrl(String url)
    {
        this.url = url;
    }
}

