<?php

class UpgradeExample
{
    /**
     * @return int
     * @param string $input
     */
    public function switchAndMatch(string $input): int
    {
        switch ($input) {
            case 'one':
                $returnValue = 1;
                break;

            case 'two':
                $returnValue = 2;
                break;
        }

        return $returnValue;
    }
}
