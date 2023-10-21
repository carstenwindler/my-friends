# Examples for my talk "With a little help from my friends"

## 1. PHP-CS-Fixer

`vendor/bin/php-cs-fixer fix example-php-cs-fixer --dry-run`

`vendor/bin/php-cs-fixer fix example-php-cs-fixer --dry-run -v`

`vendor/bin/php-cs-fixer fix example-php-cs-fixer`

## 2. PHPStan

`php example-phpstan/example.php`

Note that result is wrong (should be 119)

`vendor/bin/phpstan analyse example-phpstan`                   

`vendor/bin/phpstan analyse example-phpstan --level 1`                   

`vendor/bin/phpstan analyse example-phpstan --level 2`                   

`vendor/bin/phpstan analyse example-phpstan --level 3`                   

Change return type of `getVat()` to `float`

`php example-phpstan/example.php`

Result is correct now

## 3. PHPMD

`vendor/bin/phpmd example-phpmd text cleancode`
`vendor/bin/phpmd example-phpmd text naming`
`vendor/bin/phpmd example-phpmd text unusedcode`

## 4. Rector

`vendor/bin/rector process --dry-run`
`vendor/bin/rector process`