package local.jonsolari.tmgox.services;

import local.jonsolari.tmgox.models.Release;
import java.util.List;

public interface ReleaseService
{
    List<Release> findAll();

    Release findById(long id);

    Release save(Release release);

    Release update(Release release, long id);

    void delete(long id);
}
