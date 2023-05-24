<?php

class User
{
    public static function find(int $id): array
    {
        return [];
    }
}

class Order
{
    public function find(int $id): array
    {
        return [];
    }
}

class ExampleClass
{
    public function loadData(string $id): void
    {
        $user = User::find($id);

        $test = new Order();
        $order = $test->find($id);

        // ...
    }
}
