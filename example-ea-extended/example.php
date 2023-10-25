<?php

class InspectionExample
{
    public function checkGreaterThanOne(int $value): bool
    {
        if ($value > 1) {
            return true;
        }

        return false;
    }
}
