<?php

class UpgradeExample
{
    /**
     * @param string $input
     * @return int
     */
    public function switchAndMatch($input)
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
