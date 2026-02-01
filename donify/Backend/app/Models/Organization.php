<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{

  protected $fillable = [
        'org_name',
        'org_registrationDate',
        'org_description',
        'category_id',
        'wilaya_id',
        'org_email',
        'org_slogan',
        'status',
        'org_hero_img',
        'org_logo',
        'org_mission',
        'org_vision',
        'mission_img',
        'program1_title',
        'program1_desc',
        'program1_img',
        'program2_title',
        'program2_desc',
        'program2_img',
        'impact_value1',
        'imapct_desc1',
        'impact_value2',
        'imapct_desc2',
        'impact_value3',
        'imapct_desc3',
        'value1',
        'value2',
        'value3',
        'value4',
        'org_address',
        'org_phone',
        'org_facebook',
        'org_instagram',
  ];
      // Relationship to campaigns
    // public function campaigns()
    // {
    //     return $this->hasMany(Campaign::class);
    // }

    // Transform programs into array - ALWAYS return all slots
    public function getProgramsAttribute()
    {
        return [
            [
                'title' => $this->program1_title ?? null,
                'description' => $this->program1_desc ?? null,
                'image' => $this->program1_img ? asset('storage/' . $this->program1_img) : null,
            ],
            [
                'title' => $this->program2_title ?? null,
                'description' => $this->program2_desc ?? null,
                'image' => $this->program2_img ? asset('storage/' . $this->program2_img) : null,
            ],
        ];
    }

    // Transform impact into array - ALWAYS return all 3 slots
    public function getImpactAttribute()
    {
        return [
            [
                'value' => $this->impact_value1 ?? null,
                'description' => $this->imapct_desc1 ?? null,
            ],
            [
                'value' => $this->impact_value2 ?? null,
                'description' => $this->imapct_desc2 ?? null,
            ],
            [
                'value' => $this->impact_value3 ?? null,
                'description' => $this->imapct_desc3 ?? null,
            ],
        ];
    }

    // Transform values into array - ALWAYS return all 4 values
    public function getValuesAttribute()
    {
        return [
            $this->value1 ?? null,
            $this->value2 ?? null,
            $this->value3 ?? null,
            $this->value4 ?? null,
        ];
    }

    // Transform contact into array for React
    public function getContactAttribute()
    {
        $contact = [];
        
        if ($this->org_address) {
            $contact[] = [
                'type' => 'Address',
                'icon' => 'fa-solid fa-location-dot',
                'content' => $this->org_address,
                'isLink' => false,
            ];
        }
        
        if ($this->org_phone) {
            $contact[] = [
                'type' => 'Phone',
                'icon' => 'fa-solid fa-phone',
                'content' => $this->org_phone,
                'isLink' => true,
                'href' => 'tel:' . $this->org_phone,
            ];
        }
        
        if ($this->org_email) {
            $contact[] = [
                'type' => 'Email',
                'icon' => 'fa-solid fa-envelope',
                'content' => $this->org_email,
                'isLink' => true,
                'href' => 'mailto:' . $this->org_email,
            ];
        }
        
        // Social Media
        $socialLinks = [];
        if ($this->org_facebook) {
            $socialLinks[] = [
                'name' => 'Facebook',
                'icon' => '/path-to-facebook-icon.png',
                'href' => $this->org_facebook,
            ];
        }
        
        if ($this->org_instagram) {
            $socialLinks[] = [
                'name' => 'Instagram',
                'icon' => '/path-to-instagram-icon.png',
                'href' => $this->org_instagram,
            ];
        }
        
        if (!empty($socialLinks)) {
            $contact[] = [
                'type' => 'Social Media',
                'icon' => 'fa-solid fa-share-nodes',
                'isMedia' => true,
                'links' => $socialLinks,
            ];
        }
        
        return $contact;
    }

   
public function category()
{
    return $this->belongsTo(Category::class);
}

public function wilaya()
{
    return $this->belongsTo(Wilaya::class);
}

public function donations()
{
    return $this->hasMany(Donation::class);
}

}