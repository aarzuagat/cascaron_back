<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Collection;

class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'photo' => $this->faker->randomElement([
                'storage/products/2022/07/16/1.jpg',
                'storage/products/2022/07/16/2.jpg',
                'storage/products/2022/07/16/3.jpg',
                'storage/products/2022/07/16/4.jpg',
            ]),
            'tag' => $this->faker->randomElement([
                'Sin etiqueta',
                'Todas las unidades',
            ]),
            'cost_price' => $this->faker->randomFloat(2,100,9000),
            'sell_price' => $this->faker->randomFloat(2,500,10000),
            'category_id' => $this->faker->numberBetween(1,10),
            'description' => $this->faker->realText(),
            'stock' => $this->faker->numberBetween(0,20000),
            'is_active' => 1,
        ];
    }

}
