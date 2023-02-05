@foreach ($tasks as $task)
<form action="/api/brands {{$brand->id}}" method="post"
<div class="form-group">
    <input type="submit" value="{{$brand->title}}">
</div>
</form>
@endforeach
