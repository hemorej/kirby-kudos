<?php 
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH'])) {
    $param = $_GET['kudos'];
    $current = 0;
    if($file = $page->file('kudos.md')){
        $current = file_get_contents($page->file('kudos.md'));
    }

    if(null == $param){
        echo $current;
    }else{
        $param == 'plus' ? ++$current : --$current;
        file_put_contents ( $page->root().'/kudos.md', $current);
    }
    return;
}
?>

<article>
    <?php echo kirbytext($page->text()) ?>
    <figure class="kudo kudoable" data-id="1">
        <a class="kudobject">
            <div class="opening">
                <span style="margin-left:-80px" class="num">0</span> Kudos
                <div class="circle">&nbsp;</div>
            </div>
        </a>
    </figure>
</article