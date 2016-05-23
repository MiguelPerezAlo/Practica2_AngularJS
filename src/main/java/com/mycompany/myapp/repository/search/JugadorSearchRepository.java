package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.Jugador;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Jugador entity.
 */
public interface JugadorSearchRepository extends ElasticsearchRepository<Jugador, Long> {
}
