import React from 'react'
import { REGIONS } from '../../../constants/regions';
import { showOnLoad } from '../../../helpers/conditionals';
import { usePokemonContext } from '../../../hooks';
import { ProductCard } from '../CLPCard';
import { Grid } from './styled';

export const CLPTemplate = ({ currentRegion }: any) => {
    const { kantoPokemon, johtoPokemon, sinnohPokemon, isLoading } = usePokemonContext();
    const fallback = (<p>Loading...</p>)

    const PokemonCards = () => {
        // Must be a better way to do this.
        return (
            <>
                {showOnLoad(isLoading)(fallback)(
                    <>
                        {currentRegion.path === REGIONS[0].path ? 
                            kantoPokemon.slice(0, 18).map((pokemon: any) => {
                                return (
                                    <React.Fragment key={pokemon.id}>
                                        <ProductCard pokemon={pokemon} region={currentRegion} />
                                    </React.Fragment>
                                )
                            })
                            :
                            currentRegion.path === REGIONS[1].path ? 
                            johtoPokemon.slice(0, 18).map((pokemon: any) => {
                                return (
                                    <React.Fragment key={pokemon.id}>
                                        <ProductCard pokemon={pokemon} region={currentRegion} />
                                    </React.Fragment>
                                )
                            })
                            :
                            sinnohPokemon.slice(0, 18).map((pokemon: any) => {
                                return (
                                    <React.Fragment key={pokemon.id}>
                                        <ProductCard pokemon={pokemon} region={currentRegion} />
                                    </React.Fragment>
                                )
                            })
                            }
                    </>
                )}
            </>
        )
    };
   
    return (
            <Grid>
                <PokemonCards />
            </Grid>
    )
}