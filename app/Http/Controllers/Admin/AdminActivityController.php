<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use Illuminate\Http\Request;

class AdminActivityController extends Controller
{
    public function index()
    {
        return Activity::orderBy('order')->get();
    }

    public function store(Request $request)
    {
        $data = $this->validateData($request);

        // slug auto si non fourni
        if (empty($data['slug'])) {
            $data['slug'] = \Str::slug($data['title']);
        }

        $activity = Activity::create($data);

        return response()->json($activity, 201);
    }

    public function update(Request $request, Activity $activity)
    {
        $data = $this->validateData($request, $activity->id);

        if (empty($data['slug'])) {
            $data['slug'] = \Str::slug($data['title']);
        }

        $activity->update($data);

        return response()->json($activity);
    }

    public function destroy(Activity $activity)
    {
        $activity->delete();

        return response()->json(['message' => 'Activité supprimée']);
    }

    protected function validateData(Request $request, ?int $id = null): array
    {
        return $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['nullable', 'string', 'max:255', 'unique:activities,slug,' . ($id ?? 'NULL') . ',id'],
            'category' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'features' => ['nullable', 'array'],
            'features.*' => ['nullable', 'string', 'max:255'],
            'primary_stat_label' => ['nullable', 'string', 'max:255'],
            'primary_stat_value' => ['nullable', 'string', 'max:255'],
            'secondary_stat_label' => ['nullable', 'string', 'max:255'],
            'secondary_stat_value' => ['nullable', 'string', 'max:255'],
            'icon' => ['nullable', 'string', 'max:255'],
            'order' => ['nullable', 'integer', 'min:0'],
            'is_active' => ['nullable', 'boolean'],
        ]);
    }
}


