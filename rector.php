<?php

declare(strict_types=1);

use Rector\Config\RectorConfig;
use Rector\Set\ValueObject\LevelSetList;
use Rector\Set\ValueObject\SetList;
use Rector\TypeDeclaration\Rector\ClassMethod\AddParamTypeDeclarationRector;

return static function (RectorConfig $rectorConfig): void {
    $rectorConfig->paths([
        __DIR__ . '/example-rector',
    ]);

    // define sets of rules
    $rectorConfig->sets([
        SetList::DEAD_CODE,
        SetList::TYPE_DECLARATION,
        LevelSetList::UP_TO_PHP_82,
    ]);
};
