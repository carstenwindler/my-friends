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
                return 1;
                break;

            case 'two':
                return 2;
                break;

            default:
                return 3;
        }
    }
}
