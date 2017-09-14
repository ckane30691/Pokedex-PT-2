
json.pokemon do
  json.partial! 'api/pokemon/pokemon', pokemon: @pokemon
  json.attack @pokemon.attack
  json.defense @pokemon.defense
  json.poke_type @pokemon.poke_type
  json.moves do
    json.array! @pokemon.moves
  end
end

json.items do
  json.array! @pokemon.items do |item|
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness
    json.image_url asset_path(item.image_url)
  end
end
